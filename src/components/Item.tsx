import Xarrow, { Xwrapper, anchorType, useXarrow } from "react-xarrows";
import styled from "styled-components";
import { ControlScheme } from "../data/initialConfig";
import BlockLayout from "./blockLayout";
import { getCustomBlockStyles } from "./blockStyleVariants";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { activeElement, initialConfigAtom } from "../state/configState";
import { useAtom } from "jotai";
import { colors } from "../App";

interface StyledPropTypes {
    id: string;
    posX: number;
    posY: number;
    isActive?: boolean;
}

const StyledStartInput: any = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px;
    font-family: Myriad Pro Condensed;
    font-size: 12px;
    font-weight: 300;
    border-radius: 5px;
    letter-spacing: 0.75px;
    border: 2px solid rgba(0, 0, 0, 0);

    ${(props: StyledPropTypes) =>
        props.isActive &&
        `border: 2px solid ${colors.orange}; box-shadow: 0 0 10px ${colors.yellow};`}
    ${(props: StyledPropTypes) => getCustomBlockStyles(props.id)}
`;

const StyledEndInput: any = styled.div`
    position: absolute;
    left: ${(props: any) => props.posX}px;
    top: ${(props: any) => props.posY}px;
`;

interface Props {
    start: number[];
    end?: number[] | null | undefined;
    startAnchorAttachmentSide: anchorType;
    endAnchorAttachmentSide: anchorType;
    colors: {
        [color: string]: string;
    };
    startId: string;
    endId: string;
    id: string;
    controlScheme: ControlScheme[];
    icons?: string[];
    iconWidth?: number;
}

export default function Item({
    start,
    end,
    colors,
    startId,
    endId,
    id,
    startAnchorAttachmentSide,
    endAnchorAttachmentSide,
    controlScheme,
    icons,
    iconWidth,
}: Props) {
    const [element] = useAtom(activeElement);

    return (
        <>
            <Xwrapper>
                <DraggableBox id={id} start={start}>
                    <StyledStartInput id={startId} isActive={element === id}>
                        <BlockLayout
                            controlScheme={controlScheme}
                            id={id}
                            icons={icons}
                            iconWidth={iconWidth}
                        />
                    </StyledStartInput>
                </DraggableBox>
                {end !== null && (
                    <StyledEndInput
                        id={endId}
                        posX={end?.[0]}
                        posY={end?.[1]}
                    ></StyledEndInput>
                )}

                <Xarrow
                    start={startId}
                    end={endId}
                    showXarrow={!!end}
                    path="grid"
                    startAnchor={startAnchorAttachmentSide}
                    endAnchor={endAnchorAttachmentSide}
                    headShape="circle"
                    headSize={2}
                    color={colors.orange}
                    strokeWidth={3}
                    zIndex={1000}
                />
            </Xwrapper>
        </>
    );
}

const DraggableBox = ({ children, start, id }: any) => {
    const updateXarrow = useXarrow();
    const [config, setConfig] = useAtom(initialConfigAtom);

    const handleStop = (_e: DraggableEvent, data: DraggableData) => {
        const updatedConfig = [...config];
        const parentObject = updatedConfig.find((config) => config.id === id);

        parentObject.boxPositionStart[0] = data.x;
        parentObject.boxPositionStart[1] = data.y;
        setConfig(updatedConfig);
        updateXarrow();
    };

    return (
        <Draggable
            onDrag={updateXarrow}
            onStop={handleStop}
            defaultPosition={{ x: start[0], y: start[1] }}
        >
            {children}
        </Draggable>
    );
};
