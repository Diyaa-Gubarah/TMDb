import { Modal, StyleSheet, View } from "react-native";

import { NativeText } from "..";
import React from "react";
import { useTheme } from "../../hooks";

type Props = {
  label: string;
  error?: string;
  visible: boolean;
};

const ErrorModal = ({ error, label, visible }: Props) => {
  const { theme } = useTheme();
  const [show, setShow] = React.useState(visible);
  return (
    <Modal
      transparent={true}
      visible={show}
      statusBarTranslucent
      onRequestClose={() => setShow(false)}
    >
      <View
        style={{
          ...styles.modal,
          backgroundColor: `${theme.colors.textSecondary}26`,
        }}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: theme.colors.background,
            paddingHorizontal: theme.spacing.lg,
            paddingBottom: theme.spacing.lg,
            borderRadius: theme.spacing.sm,
            alignItems: "center",
          }}
        >
          <NativeText color="textPrimary" size="lg" family="medium">
            {label}
          </NativeText>
          <NativeText
            color="textSecondary"
            size="md"
            align="center"
            margin="sm"
          >
            {error}
          </NativeText>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ErrorModal);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: { width: "95%", maxHeight: "50%", justifyContent: "center" },
});
