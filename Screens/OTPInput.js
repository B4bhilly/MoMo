
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const OTPInput = ({ onComplete }) => {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({
    value,
    cellCount: CELL_COUNT,
  });

  const [props, getCellOnLayoutHandler] =
    useClearByFocusCell({
      value,
      setValue,
    });

  const handleChange = (text) => {
    setValue(text);

    if (text.length === CELL_COUNT) {
      onComplete?.(text);
    }
  };

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={handleChange}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: 'sms-otp',
          default: 'one-time-code',
        })}
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            onLayout={getCellOnLayoutHandler(index)}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
            ]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  codeFieldRoot: {
    gap: 10,
  },

  cell: {
    width: 50,
    height: 55,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  focusCell: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },

  cellText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
});

export default OTPInput;
