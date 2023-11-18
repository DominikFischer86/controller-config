import styles from "./editor.module.scss";

import ControllerConfig from "./controllerConfig";

interface Props {
    hideEmptyInputs: boolean;
    drawerSide: "left" | "right";
    closeDrawer: () => void;
    handleHideInput: () => void;
}

export default function Editor({ hideEmptyInputs, drawerSide, handleHideInput, closeDrawer }: Props) {
    const drawerPosition = drawerSide === "left" ? "right" : "left";

    return (
        <div className={styles.editor}>
            <div className={styles.controlPanel}>
                <button onClick={closeDrawer}>Close</button>
                <button onClick={handleHideInput}>{hideEmptyInputs ? "Hide" : "Show"} empty inputs</button>
            </div>
            <h3>Edit {drawerPosition} joystick</h3>
            <ControllerConfig type={drawerPosition} />
        </div>
    );
}
