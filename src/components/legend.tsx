import styles from "./legend.module.scss";

import { useAtom } from "jotai";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { Xwrapper, useXarrow } from "react-xarrows";
import { initialConfigAtom } from "../state/configState";
import styled from "styled-components";

interface StyledPropTypes {
    fontSize: number;
}

const StyledLegendItem = styled.div`
    ${(props: StyledPropTypes) => `font-size: ${props.fontSize}px;`}
`;

export default function Legend() {
    const [config] = useAtom(initialConfigAtom);
    return (
        <Xwrapper>
            <DraggableBox start={config.legend.boxPosition}>
                <div className={styles.legend}>
                    {config.legend.entries.map((entry) => (
                        <StyledLegendItem
                            className={styles.legendItem}
                            key={entry.short}
                            fontSize={config.settings.fontSize}
                        >
                            <div style={{ color: entry.color }}>
                                [{entry.short}]
                            </div>
                            <div>{entry.text}</div>
                        </StyledLegendItem>
                    ))}
                    <StyledLegendItem fontSize={config.settings.fontSize}>
                        * Mode Switch not used
                    </StyledLegendItem>
                </div>
            </DraggableBox>
        </Xwrapper>
    );
}

const DraggableBox = ({ children, start }: any) => {
    const updateXarrow = useXarrow();
    const [config, setConfig] = useAtom(initialConfigAtom);

    const handleStop = (_e: DraggableEvent, data: DraggableData) => {
        const updatedConfig = { ...config };

        updatedConfig.legend.boxPosition[0] = data.x;
        updatedConfig.legend.boxPosition[1] = data.y;
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
