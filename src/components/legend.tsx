import styles from "./legend.module.scss";

import { useAtom } from "jotai";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { Xwrapper, useXarrow } from "react-xarrows";
import { initialConfigAtom } from "../state/configState";
export default function Legend() {
    const [config] = useAtom(initialConfigAtom);
    return (
        <Xwrapper>
            <DraggableBox start={config.legend.boxPosition}>
                <div className={styles.legend}>
                    {config.legend.entries.map((entry) => (
                        <div className={styles.legendItem} key={entry.short}>
                            <div style={{ color: entry.color }}>
                                [{entry.short}]
                            </div>
                            <div>{entry.text}</div>
                        </div>
                    ))}
                    <div>* Mode Switch not used</div>
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
