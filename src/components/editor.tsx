import styles from "./editor.module.scss";

import ControllerConfig from "./controllerConfig";

interface Props {
    closeDrawer: () => void;
    drawerSide: "left" | "right";
}

export default function Editor({ closeDrawer, drawerSide }: Props) {
    const drawerPosition = drawerSide === "left" ? "right" : "left";

    return (
        <div className={styles.editor}>
            <div className={styles.controlPanel}>
                <button onClick={closeDrawer}>Close</button>
            </div>
            <h3>Edit {drawerPosition} joystick</h3>
            <ControllerConfig type={drawerPosition} />
        </div>
    );
}
