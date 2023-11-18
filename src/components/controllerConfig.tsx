import styles from "./controllerConfig.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ExpandMoreOutlined } from "@mui/icons-material";

import { Config } from "../data/initialConfig";
import React from "react";
import { useAtom } from "jotai";
import { activeElement, initialConfigAtom } from "../state/configState";
import styled from "styled-components";
import InputBlock from "./inputBlock";

import { modeValues } from "./blockElement";
import AnchorPositionButtons from "./anchorPositionButtons";
import { ControlScheme } from "../data/initialConfig";
import { anchorType } from "react-xarrows";

interface Props {
    type: "left" | "right";
}

const StyledAccordion = styled(Accordion)`
    background: none !important;
    box-shadow: -5px 0 6px #5d9438 !important;
    color: #fff !important;
    border-radius: 5px !important;

    &.Mui-expanded {
        .MuiAccordionSummary-content {
            color: #fff;
        }
    }

    .MuiAccordionSummary-content {
        text-transform: uppercase;
        font-weight: bold;
        color: #bbb;
    }

    .MuiAccordionSummary-expandIconWrapper {
        svg {
            fill: #fff !important;
        }
    }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
    border-bottom: 2px dashed #5d9438 !important;
`;

function findIndexes(array1: string[], array2: string[] | null | undefined) {
    if (array2 === null || array2 === undefined) return null;
    return array2.map((item: string) => array1.indexOf(item));
}

function updateArray(array: string[] | undefined, item: string) {
    if (array === undefined) return [];
    return array!.includes(item)
        ? array.filter((i) => i !== item)
        : [...array, item];
}

export default function ControllerConfig({ type }: Props) {
    const [config, setConfig] = useAtom(initialConfigAtom);
    const [_element, setElement] = useAtom(activeElement);

    const leftControllerData = config.inputBoxPositions.filter((item: Config) =>
        item.id.includes("left-")
    );
    const rightControllerData = config.inputBoxPositions.filter(
        (item: Config) => item.id.includes("right-")
    );
    const selectedControllerData =
        type === "left" ? leftControllerData : rightControllerData;

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
            isExpanded ? setElement(panel as any) : setElement(null);
        };

    const handleInputChange = (
        e: React.SyntheticEvent,
        id: string,
        type: string
    ) => {
        const inputName = (e.currentTarget as HTMLInputElement).name;
        const value = (e.currentTarget as HTMLInputElement).value;

        const updatedConfig = { ...config };
        const parentObject = updatedConfig.inputBoxPositions.find(
            (config) => config.id === id
        );
        const controlSchemeObject = parentObject?.controlScheme.find(
            (scheme: ControlScheme) => scheme.id === inputName
        );

        if (type === "primary")
            controlSchemeObject!.inputs.primaryInput = value;
        if (type === "secondary")
            controlSchemeObject!.inputs.secondaryInput = value;
        if (type === "tertiary")
            controlSchemeObject!.inputs.tertiaryInput = value;
        setConfig(updatedConfig);
    };

    const handleModesSelection = (
        e: React.SyntheticEvent,
        type: string,
        id: string,
        boxId: string,
        mode?: string[] | null
    ) => {
        const modeIndex = findIndexes(modeValues, mode);
        const selectedModes = modeIndex?.map((index) => modeValues[index]);
        const selectionName = (e.target as HTMLSelectElement).name;

        const updatedConfig = { ...config };
        const parentObject = updatedConfig.inputBoxPositions.find(
            (config) => config.id === id
        );
        const controlSchemeObject = parentObject?.controlScheme.find(
            (scheme: ControlScheme) => scheme.id === boxId
        );

        const newModesArray = updateArray(selectedModes, selectionName);

        if (type === "primary")
            controlSchemeObject!.modes.primaryMode = newModesArray;
        if (type === "secondary")
            controlSchemeObject!.modes.secondaryMode = newModesArray;
        if (type === "tertiary")
            controlSchemeObject!.modes.tertiaryMode = newModesArray;
        setConfig(updatedConfig);
    };

    const handleAnchorButtonClick = (
        side: anchorType,
        id: string,
        type: "start" | "end"
    ) => {
        const updatedConfig = { ...config };
        const parentObject = updatedConfig.inputBoxPositions.find(
            (config) => config.id === id
        );

        if (parentObject === undefined) return;

        type === "start"
            ? (parentObject.startAnchorAttachmentSide = side)
            : (parentObject.endAnchorAttachmentSide = side);
        setConfig(updatedConfig);
    };

    return (
        <div>
            {selectedControllerData.map((item: Config) => (
                <StyledAccordion
                    key={item.id}
                    expanded={expanded === item.id}
                    onChange={handleChange(item.id)}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-id`}
                    >
                        <div>{item.title}</div>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                        {item.controlScheme.map((box) => {
                            return (
                                <div className={styles.inputs} key={box.id}>
                                    <label>{box.label}</label>
                                    <InputBlock
                                        itemId={item.id}
                                        hideEmptyInputs={config.settings.hideEmptyInputs}
                                        type="primary"
                                        boxId={box.id}
                                        value={box.inputs.primaryInput}
                                        mode={box.modes.primaryMode}
                                        fontSize={config.settings.fontSize}
                                        handleInputChange={handleInputChange}
                                        handleModesSelection={
                                            handleModesSelection
                                        }
                                    />
                                    {box.inputs.secondaryInput !== null && (
                                        <InputBlock
                                            itemId={item.id}
                                            hideEmptyInputs={config.settings.hideEmptyInputs}
                                            type="secondary"
                                            boxId={box.id}
                                            value={box.inputs.secondaryInput}
                                            mode={box.modes.secondaryMode}
                                            fontSize={config.settings.fontSize}
                                            handleInputChange={
                                                handleInputChange
                                            }
                                            handleModesSelection={
                                                handleModesSelection
                                            }
                                        />
                                    )}
                                    {box.inputs.tertiaryInput !== null && (
                                        <InputBlock
                                            itemId={item.id}
                                            hideEmptyInputs={config.settings.hideEmptyInputs}
                                            type="tertiary"
                                            boxId={box.id}
                                            value={box.inputs.tertiaryInput}
                                            mode={box.modes.tertiaryMode}
                                            fontSize={config.settings.fontSize}
                                            handleInputChange={
                                                handleInputChange
                                            }
                                            handleModesSelection={
                                                handleModesSelection
                                            }
                                        />
                                    )}
                                </div>
                            );
                        })}
                        {item.id !== "left-direction-controls" &&
                            item.id !== "right-direction-controls" && (
                                <div className={styles.boxPositionWrapper}>
                                    <AnchorPositionButtons
                                        item={item}
                                        handleAnchorButtonClick={
                                            handleAnchorButtonClick
                                        }
                                    />
                                </div>
                            )}
                    </AccordionDetails>
                </StyledAccordion>
            ))}
        </div>
    );
}
