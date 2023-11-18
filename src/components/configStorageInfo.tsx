import styles from "../App.module.scss";
import { colors } from "../data/initialConfig";
import { configExistsInLocalStorage, storageKey } from "../state/configState";

interface Props {
    download: () => void;
    upload: () => void;
    setOpenModal: (_: boolean) => void;
}

export default function ConfigStorageInfo({ download, upload, setOpenModal }: Props) {
    return (
        <div className={styles.configExists}>
            {configExistsInLocalStorage && (
                <span
                    style={{ color: colors.green, cursor: "pointer" }}
                    onClick={download}
                >
                    Config in localstorage
                </span>
            )}
            {!configExistsInLocalStorage && (
                <span style={{ color: colors.red }}>
                    No Config in LocalStorage
                </span>
            )}
            {localStorage.getItem(storageKey) && (
                <>
                    {" "}
                    |{" "}
                    <span
                        style={{ color: colors.red, cursor: "pointer" }}
                        onClick={() => setOpenModal(true)}
                    >
                        Reset config
                    </span>
                </>
            )}
            {" "}|
            {" "}
            <span 
                style={{ color: colors.orange, cursor: "pointer" }}
                onClick={upload}>
                    Load config
            </span>
        </div>
    );
}
