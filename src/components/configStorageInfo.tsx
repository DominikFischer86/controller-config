import styles from "../App.module.scss";
import { colors } from "../data/initialConfig";
import { configExistsInLocalStorage, storageKey } from "../state/configState";

interface Props {
    download: () => void;
    setOpenModal: (_: boolean) => void;
}

export default function ConfigStorageInfo({ download, setOpenModal }: Props) {
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
        </div>
    );
}
