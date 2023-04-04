import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';

const ConfirmAlert = (Confirm, Declined) => {
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);

  const handleButtonPress = () => {
    setConfirmDialogVisible(true);
  };

  const handleConfirm = () => {
    // Perform the action that should happen when the user confirms

    setConfirmDialogVisible(false);
  };

  const handleCancel = () => {
    // Perform the action that should happen when the user cancels

    setConfirmDialogVisible(false);
  };

  return (
    <View>
      <Button title="Press me" onPress={handleButtonPress} />
      {confirmDialogVisible && (
        <Alert
          title="Confirm"
          message="Are you sure you want to perform this action?"
          positiveButton={{
            title: 'Confirm',
            onPress: handleConfirm,
          }}
          negativeButton={{
            title: 'Cancel',
            onPress: handleCancel,
          }}
        />
      )}
    </View>
  );
};

export default ConfirmAlert;
