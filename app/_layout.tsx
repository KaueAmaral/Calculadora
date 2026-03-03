import {React, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//funções para concatenação no display da calculadora, botoes de all clear e clear, e pro botão de igual
export default function App() {
  const [input, setInput] = useState("0");

  const handlePress = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleDelete = () => {
    if (input.length === 1) {
      setInput("0");
    } else {
      setInput(input.slice(0, -1));
    }
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Erro");
    }
  };

  //botões da calculadora ja ordem das posições que foram definidas por mim no prototipo 
  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>

  <View style={styles.buttonsContainer}>
  <Button label="AC" onPress={handleClear} variant="darkYellow" />
  <Button label="C" onPress={handleDelete} variant="lightYellow" />
  <Button label="." onPress={() => handlePress(".")} />
  <Button label="+" onPress={() => handlePress("+")} />
  <Button label="7" onPress={() => handlePress("7")} />
  <Button label="8" onPress={() => handlePress("8")} />
  <Button label="9" onPress={() => handlePress("9")} />
  <Button label="-" onPress={() => handlePress("-")} />
  <Button label="4" onPress={() => handlePress("4")} />
  <Button label="5" onPress={() => handlePress("5")} />
  <Button label="6" onPress={() => handlePress("6")} />
  <Button label="*" onPress={() => handlePress("*")} />
  <Button label="1" onPress={() => handlePress("1")} />
  <Button label="2" onPress={() => handlePress("2")} />
  <Button label="3" onPress={() => handlePress("3")} />
  <Button label="/" onPress={() => handlePress("/")} />
  <Button label="0" onPress={() => handlePress("0")} />
  <Button label="=" onPress={handleEqual} variant="equal" />
  </View>
  </SafeAreaView>
  );
};


//componente do botao !
const Button = ({ label, onPress, variant }) => {
    return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "darkYellow" && styles.darkYellowButton,
        variant === "lightYellow" && styles.lightYellowButton,
        variant === "equal" && styles.equalButton
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "equal" && styles.equalText
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

//demais estilizaçoes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    justifyContent: "flex-end",
    padding: 10,
  },
  display: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  displayText: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "22%",
    backgroundColor: "#ccc",
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
  },
  darkYellowButton: {
  backgroundColor: "#f1b000", 
  },
  lightYellowButton: {
  backgroundColor: "#f1c40f", 
  },
  equalButton: {
  width: "48%",
  backgroundColor: "purple",
  },
  equalText: {
  color: "#fff",
  }
});