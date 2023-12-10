import styles from "./editor.module.scss";

import ControllerConfig from "./controllerConfig";

interface Props {
    hideBoxes: boolean;
    hideEmptyInputs: boolean;
    drawerSide: "left" | "right";
    closeDrawer: () => void;
    handleHideBox: () => void;
    handleHideInput: () => void;
}

export default function Editor({
    hideBoxes,
    hideEmptyInputs,
    drawerSide,
    handleHideInput,
    handleHideBox,
    closeDrawer,
}: Props) {
    const drawerPosition = drawerSide === "left" ? "right" : "left";

    return (
        <div className={styles.editor}>
            <div className={styles.controlPanel}>
                <button onClick={closeDrawer}>Close</button>
                <button onClick={handleHideInput}>
                    {hideEmptyInputs ? "Hide" : "Show"} empty inputs
                </button>
                <button onClick={handleHideBox}>
                    {hideBoxes ? "Hide" : "Show"} all input boxes
                </button>
            </div>
            <h3>Edit {drawerPosition} joystick</h3>
            <ControllerConfig type={drawerPosition} />
        </div>
    );
}
