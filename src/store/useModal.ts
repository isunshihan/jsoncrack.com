import { create } from "zustand";
import type { Modal } from "src/containers/Modals";

type ModalState = {
  visible: {
    node: boolean;
    import: boolean;
    schema: boolean;
    jq: boolean;
    jpath: false;
    jwt: boolean;
    type: boolean;
  };
};

interface ModalActions {
  setVisible: (
    key: "node" | "import" | "schema" | "jq" | "jpath" | "jwt" | "type"
  ) => (value: boolean) => void;
}

const initialStates: ModalState = {
  visible: {
    node: false,
    import: false,
    schema: false,
    jq: false,
    jpath: false,
    jwt: false,
    type: false,
  }
};

const useModal = create<ModalState & ModalActions>()(set => ({
  ...initialStates,
  setVisible: key => isVisible => set(state => ({ 
    visible: { ...state.visible, [key]: isVisible } 
  })),
}));

export default useModal;
