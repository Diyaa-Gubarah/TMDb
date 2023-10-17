import { Modal, StyleSheet, View } from "react-native";
import React, { forwardRef, useImperativeHandle, useState } from "react";

import { useTheme } from "../../hooks";

interface Props {
  onClose: () => void;
  children?: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const NativeModal = forwardRef((props: Props, ref) => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const { onClose, children } = props;

  useImperativeHandle(ref, () => ({
    open: () => {
      setModalVisible(true);
    },
    close: () => {
      setModalVisible(false);
    },
  }));

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View
        style={{
          ...styles.modal,
          backgroundColor: `${theme.colors.textSecondary}26`,
        }}
      >
        {children}
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NativeModal;
