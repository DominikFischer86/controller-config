import React, { useState } from "react";
import { useAtom } from "jotai";
import Drawer from "@mui/material/Drawer";
import { Modal } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";

import styles from "./App.module.scss";
import Item from "./components/Item";
import { Config, colors, initialConfig } from "./data/initialConfig";
import Editor from "./components/editor";

import {
    activeElement,
    initialConfigAtom,
    storageKey,
} from "./state/configState";
import { theme } from "./styles/muiTheme";
import ConfigStorageInfo from "./components/configStorageInfo";
import Legend from "./components/legend";
import Settings from "./components/settings";

interface StyledPropTypes {
    fontSize: number;
}

const StyledDrawer = styled(Drawer)`
    .MuiPaper-root.MuiDrawer-paper {
        overflow-y: scroll;
        width: 40vw;

        ${(props: StyledPropTypes) => `font-size: ${props.fontSize}px;`}

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 8px rgba(#d47d1e, 0.25);
            -webkit-box-shadow: inset 0 0 8px rgba(#d47d1e, 0.25);
            background-color: rgba(#000, 0.25);
        }

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #fff;
            border-radius: 50px;
            background-image: -webkit-gradient(
                linear,
                40% 0%,
                75% 84%,
                from(#388ac4),
                to(#5d9438)
            );
        }
    }
`;

const SettingsDrawer = styled(Drawer)`
    .MuiPaper-root.MuiDrawer-paper
        width: 100%;
        font-size: 20px;     
    }
`;

function App() {
    const [config, setConfig] = useAtom(initialConfigAtom);
    const [isOpenEditor, setIsOpenEditor] = useState(false);
    const [editorPosition, setEditorPosition] = useState<"left" | "right">(
        "left"
    );

    const [_element, setElement] = useAtom(activeElement);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openNotification, setOpenNotification] = useState({
        state: false,
        message: "",
    });
    const [openUploadModal, setOpenUploadModal] = useState(false);

    const handleSaveConfigToLocalStorage = () => {
        localStorage.setItem(storageKey, JSON.stringify(config));
        setOpenNotification({
            state: true,
            message: "Config has been saved to localStorage!",
        });
    };

    const handleModalOpen = (side: string) => {
        side !== "left"
            ? setEditorPosition("right")
            : setEditorPosition("left");
        setIsOpenEditor(true);
    };

    const closeDrawer = () => {
        setIsOpenEditor(false);
        setElement(null);
    };

    const handleConfigReset = () => {
        localStorage.removeItem(storageKey);
        setOpenModal(false);
        setConfig(initialConfig);
    };

    const handleHideInput = () => {
        const updatedConfig = { ...config };
        config.settings.hideEmptyInputs = !config.settings.hideEmptyInputs;
        setConfig(updatedConfig);
    };

    const handleHideBoxes = () => {
        const updatedConfig = { ...config };

        if (
            !confirm(
                "Do you really want to toggle all boxes? Unsaved changes for visible boxes might be lost."
            )
        )
            return;

        if (updatedConfig.settings.hideBoxes) {
            config.settings.hideBoxes = false;
            updatedConfig.inputBoxPositions.map(
                (item) => (item.visible = false)
            );
        } else {
            config.settings.hideBoxes = true;
            updatedConfig.inputBoxPositions.map(
                (item) => (item.visible = true)
            );
        }
        setConfig(updatedConfig);
    };

    const download = () => {
        const filename = prompt("Choose file name for download");
        if (!filename) return;
        const jsonData = JSON.stringify(config);
        const a = document.createElement("a");

        const blob = new Blob([jsonData], { type: "text/json" });
        a.href = URL.createObjectURL(blob);
        a.download = filename + ".json";
        a.click();
    };

    const handleFileUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target && event.target.files) {
            const formData = new FormData();
            formData.append("file", event.target.files[0]);

            try {
                const result = await fetch("https://httpbin.org/post", {
                    method: "POST",
                    body: formData,
                });
                const data = await result.json();

                if (data) {
                    const mendedData = {
                        ...initialConfig,
                        ...JSON.parse(data.files.file),
                    };
                    setConfig(mendedData);
                    localStorage.setItem(
                        storageKey,
                        JSON.stringify(mendedData)
                    );
                    setOpenNotification({
                        state: true,
                        message: "Config has been loaded successfully!",
                    });
                    setOpenUploadModal(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            {" "}
            <div className={styles.controlPanel}>
                <div className={styles.title}>
                    Star Citizen |{" "}
                    <span>Dual VKB Gladiator NXT/NXT Evo Binding Chart</span>
                </div>
                <div>
                    <button onClick={() => handleModalOpen("right")}>
                        Edit Left Joystick
                    </button>
                    <button onClick={handleSaveConfigToLocalStorage}>
                        Save Config
                    </button>
                    <button onClick={() => setSettingsOpen(true)}>
                        General Settings
                    </button>
                    <button onClick={() => handleModalOpen("left")}>
                        Edit Right Joystick
                    </button>
                </div>
                <ConfigStorageInfo
                    download={download}
                    upload={() => setOpenUploadModal(true)}
                    setOpenModal={setOpenModal}
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.canvas}>
                    {config.inputBoxPositions.map((block: Config) => {
                        if (!block.visible) return;

                        return (
                            <Item
                                key={block.id}
                                start={block.boxPositionStart}
                                end={block.boxPositionEnd}
                                colors={colors}
                                id={block.id}
                                startId={block.id + "-start"}
                                endId={block.id + "-end"}
                                startAnchorAttachmentSide={
                                    block.startAnchorAttachmentSide
                                }
                                endAnchorAttachmentSide={
                                    block.endAnchorAttachmentSide
                                }
                                controlScheme={block.controlScheme}
                                icons={block.icons}
                                iconWidth={block.iconWidth}
                            />
                        );
                    })}
                </div>
                <Legend />
            </div>
            <StyledDrawer
                open={isOpenEditor}
                ModalProps={{ onBackdropClick: closeDrawer }}
                anchor={editorPosition}
                id="scrollbar"
                hideBackdrop={false}
                fontSize={config.settings.fontSize}
            >
                <div className={styles.editorWrapper}>
                    <ThemeProvider theme={theme}>
                        <Editor
                            hideBoxes={config.settings.hideBoxes}
                            drawerSide={editorPosition}
                            hideEmptyInputs={config.settings.hideEmptyInputs}
                            handleHideBox={handleHideBoxes}
                            handleHideInput={handleHideInput}
                            closeDrawer={closeDrawer}
                        />
                    </ThemeProvider>
                </div>
            </StyledDrawer>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="reset-data"
            >
                <div className={styles.modal}>
                    <h3>
                        Delete config from LocalStorage and reset to default?
                    </h3>
                    <button onClick={handleConfigReset}>Yes</button>
                    <button onClick={() => setOpenModal(false)}>No</button>
                </div>
            </Modal>
            <Modal
                open={openNotification.state}
                onClose={() =>
                    setOpenNotification({ state: false, message: "" })
                }
                aria-labelledby="confirm-notification"
            >
                <div className={styles.modal}>
                    <h3>{openNotification.message}</h3>
                    <button
                        onClick={() =>
                            setOpenNotification({ state: false, message: "" })
                        }
                    >
                        Cool, thanks!
                    </button>
                </div>
            </Modal>
            <Modal
                open={openUploadModal}
                onClose={() => setOpenUploadModal(false)}
                aria-labelledby="upload-modal"
            >
                <div className={styles.modal}>
                    <h3>Select config file to upload</h3>
                    <div>
                        <label htmlFor="file" className="sr-only">
                            Choose a file:{" "}
                        </label>
                        <input
                            id="file"
                            type="file"
                            accept=".json"
                            onChange={handleFileUpload}
                        />
                    </div>
                </div>
            </Modal>
            <SettingsDrawer
                open={settingsOpen}
                ModalProps={{ onBackdropClick: () => setSettingsOpen(false) }}
                anchor="bottom"
                hideBackdrop={false}
            >
                <Settings />
            </SettingsDrawer>
        </>
    );
}

export default App;

// https://www.npmjs.com/package/react-xarrows
// https://styled-components.com/docs/basics#passed-props
