import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import StackNavigator from './StackNavigator';
import { MovieContext } from './Context';

export default function App() {
  return (
    <>
      <MovieContext>
        <StripeProvider publishableKey='pk_test_51MjWLmGpIdSNVSdhUDIRntcY1wQ7kxlYcXF3wWPhh5vLNjvgaRSqJJdNpqoFwgPdHhdt0pJkxvw3CM0DqQ2j4IwS00HOhWrxpc'>
          <StackNavigator />
          <StatusBar style="dark" />
        </StripeProvider>
      </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
