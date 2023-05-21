import { useState } from "react";
import { useAtom } from "jotai";
import Drawer from "@mui/material/Drawer";
import { Modal } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";

import styles from "./App.module.scss";
import Item from "./components/Item";
import { Config, colors } from "./data/initialConfig";
import Editor from "./components/editor";

import {
    activeElement,
    initialConfigAtom,
    storageKey,
} from "./state/configState";
import { theme } from "./styles/muiTheme";
import ConfigStorageInfo from "./components/configStorageInfo";
import Legend from "./components/legend";

const StyledDrawer = styled(Drawer)`
    .MuiPaper-root.MuiDrawer-paper {
        overflow-y: scroll;
        width: 40vw;

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

function App() {
    const [config] = useAtom(initialConfigAtom);
    const [isOpenEditor, setIsOpenEditor] = useState(false);
    const [editorPosition, setEditorPosition] = useState<"left" | "right">(
        "left"
    );
    const [_element, setElement] = useAtom(activeElement);
    const [openModal, setOpenModal] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    const handleSaveConfigToLocalStorage = () => {
        localStorage.setItem(storageKey, JSON.stringify(config));
        setOpenNotification(true);
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
                    <button onClick={() => handleModalOpen("left")}>
                        Edit Right Joystick
                    </button>
                </div>
                <ConfigStorageInfo
                    download={download}
                    setOpenModal={setOpenModal}
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.canvas}>
                    {config.inputBoxPositions.map((block: Config) => (
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
                    ))}
                </div>
                <Legend />
            </div>
            <StyledDrawer
                open={isOpenEditor}
                ModalProps={{ onBackdropClick: closeDrawer }}
                anchor={editorPosition}
                id="scrollbar"
                hideBackdrop={false}
            >
                <div className={styles.editorWrapper}>
                    <ThemeProvider theme={theme}>
                        <Editor
                            closeDrawer={closeDrawer}
                            drawerSide={editorPosition}
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
                open={openNotification}
                onClose={() => setOpenNotification(false)}
                aria-labelledby="confirm-notification"
            >
                <div className={styles.modal}>
                    <h3>Config has been saved to localStorage!</h3>
                    <button onClick={() => setOpenNotification(false)}>
                        Cool, thanks!
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default App;

// https://www.npmjs.com/package/react-xarrows
// https://styled-components.com/docs/basics#passed-props
