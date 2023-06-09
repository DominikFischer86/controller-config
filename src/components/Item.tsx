import Xarrow, { Xwrapper, anchorType, useXarrow } from "react-xarrows";
import styled from "styled-components";
import { ControlScheme, colors } from "../data/initialConfig";
import BlockLayout from "./blockLayout";
import { getCustomBlockStyles } from "./blockStyleVariants";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { activeElement, initialConfigAtom } from "../state/configState";
import { useAtom } from "jotai";

interface StyledPropTypes {
    id: string;
    posX: number;
    posY: number;
    isActive?: boolean;
    fontSize: number;
}

const StyledStartInput: any = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px;
    font-weight: 300;
    border-radius: 5px;
    letter-spacing: 0.75px;
    border: 2px solid rgba(0, 0, 0, 0);
    ${(props: StyledPropTypes) => `font-size: ${props.fontSize}px;`}

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
    const [config] = useAtom(initialConfigAtom);

    return (
        <>
            <Xwrapper>
                <DraggableBox id={id} start={start}>
                    <StyledStartInput
                        id={startId}
                        isActive={element === id}
                        fontSize={config.settings.fontSize}
                    >
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
                    path={config.settings.lineStyle}
                    startAnchor={startAnchorAttachmentSide}
                    endAnchor={endAnchorAttachmentSide}
                    headShape="circle"
                    curveness={config.settings.curveness}
                    gridBreak={config.settings.gridBreak}
                    headSize={config.settings.headSize}
                    color={config.settings.color}
                    strokeWidth={config.settings.strokeWidth}
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
        const updatedConfig = { ...config };
        const parentObject = updatedConfig.inputBoxPositions.find(
            (config) => config.id === id
        );

        if (!parentObject) return;
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
