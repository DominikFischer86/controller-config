import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowLeft,
    ArrowRight,
} from "@mui/icons-material";

import styles from "./controllerConfig.module.scss";
import styled from "styled-components";
import { Config } from "../data/initialConfig";

const StyledButton = styled.button`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ccc !important;
    color: #000 !important;

    svg {
        fill: #000 !important;
    }

    ${(props: { isActive?: boolean }) =>
        props.isActive &&
        "background: green !important; color: #fff !important;"}
`;

interface Props {
    handleAnchorButtonClick: (
        side: string,
        id: string,
        type: "start" | "end"
    ) => void;
    item: Config;
}

export default function AnchorPositionButtons({
    item,
    handleAnchorButtonClick,
}: Props) {
    return (
        <>
            <div className={styles.boxPositions}>
                <p>Start Box Anchor</p>
                <div className={styles.buttonGrid}>
                    <StyledButton
                        aria-label="top"
                        isActive={item.startAnchorAttachmentSide === "top"}
                        onClick={() =>
                            handleAnchorButtonClick("top", item.id, "start")
                        }
                    >
                        <ArrowDropUp />
                    </StyledButton>
                    <StyledButton
                        aria-label="right"
                        isActive={item.startAnchorAttachmentSide === "right"}
                        onClick={() =>
                            handleAnchorButtonClick("right", item.id, "start")
                        }
                    >
                        <ArrowRight />
                    </StyledButton>
                    <StyledButton
                        aria-label="auto"
                        isActive={item.startAnchorAttachmentSide === "auto"}
                        onClick={() =>
                            handleAnchorButtonClick("auto", item.id, "start")
                        }
                    >
                        auto
                    </StyledButton>
                    <StyledButton
                        aria-label="bottom"
                        isActive={item.startAnchorAttachmentSide === "bottom"}
                        onClick={() =>
                            handleAnchorButtonClick("bottom", item.id, "start")
                        }
                    >
                        <ArrowDropDown />
                    </StyledButton>
                    <StyledButton
                        aria-label="left"
                        isActive={item.startAnchorAttachmentSide === "left"}
                        onClick={() =>
                            handleAnchorButtonClick("left", item.id, "start")
                        }
                    >
                        <ArrowLeft />
                    </StyledButton>
                </div>
            </div>
            <div className={styles.boxPositions}>
                <p>End Point Anchor</p>
                <div className={styles.buttonGrid}>
                    <StyledButton
                        aria-label="top"
                        isActive={item.endAnchorAttachmentSide === "top"}
                        onClick={() =>
                            handleAnchorButtonClick("top", item.id, "end")
                        }
                    >
                        <ArrowDropUp />
                    </StyledButton>
                    <StyledButton
                        aria-label="right"
                        isActive={item.endAnchorAttachmentSide === "right"}
                        onClick={() =>
                            handleAnchorButtonClick("right", item.id, "end")
                        }
                    >
                        <ArrowRight />
                    </StyledButton>
                    <StyledButton
                        aria-label="auto"
                        isActive={item.endAnchorAttachmentSide === "auto"}
                        onClick={() =>
                            handleAnchorButtonClick("auto", item.id, "end")
                        }
                    >
                        auto
                    </StyledButton>
                    <StyledButton
                        aria-label="bottom"
                        isActive={item.endAnchorAttachmentSide === "bottom"}
                        onClick={() =>
                            handleAnchorButtonClick("bottom", item.id, "end")
                        }
                    >
                        <ArrowDropDown />
                    </StyledButton>
                    <StyledButton
                        aria-label="left"
                        isActive={item.endAnchorAttachmentSide === "left"}
                        onClick={() =>
                            handleAnchorButtonClick("left", item.id, "end")
                        }
                    >
                        <ArrowLeft />
                    </StyledButton>
                </div>
            </div>
        </>
    );
}
