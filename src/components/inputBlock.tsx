import { useState } from "react";

import { modeKeys, modeValues } from "./blockElement";
import styles from "./controllerConfig.module.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Modal } from "@mui/material";

interface Props {
    itemId: string;
    boxId: string;
    value?: string | null;
    type: "primary" | "secondary" | "tertiary";
    mode?: string[] | null;
    handleInputChange: (
        e: React.SyntheticEvent,
        id: string,
        type: string
    ) => void;
    handleModesSelection: (
        e: React.SyntheticEvent,
        type: string,
        id: string,
        boxId: string,
        mode?: string[] | null
    ) => void;
}

const stringToPascalCase = (string: string) => {
    return (string.match(/[a-zA-Z0-9]+/g) || [])
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join("");
};

export default function InputBlock({
    itemId,
    boxId,
    value,
    type,
    mode,
    handleInputChange,
    handleModesSelection,
}: Props) {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <div className={styles.inputWithOptions}>
                <input
                    onChange={(e) => handleInputChange(e, itemId, type)}
                    value={value ?? ""}
                    name={boxId}
                    placeholder={`Placeholder for ${type} input`}
                />
                <button onClick={() => setDialogOpen(true)}>
                    Mode {mode!.length > 0 && `[${mode!.length}]`}
                </button>
            </div>

            <Modal
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                aria-labelledby="mode-select"
            >
                <div className={styles.modal}>
                    <h4>Set mode for {type} action</h4>
                    <FormGroup
                        onChange={(e) =>
                            handleModesSelection(e, type, itemId, boxId, mode)
                        }
                    >
                        {modeKeys.map((key, index) => {
                            const valueFromArray = modeValues[index];

                            return (
                                <FormControlLabel
                                    key={key}
                                    name={valueFromArray}
                                    control={
                                        <Checkbox
                                            checked={mode?.includes(
                                                valueFromArray
                                            )}
                                            value={key}
                                        />
                                    }
                                    label={stringToPascalCase(key)}
                                />
                            );
                        })}
                    </FormGroup>
                </div>
            </Modal>
        </>
    );
}
