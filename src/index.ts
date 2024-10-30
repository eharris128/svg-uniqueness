import { createApp, defineComponent, ref } from 'vue';
import BlueButton from './components/blue';
import RedButton from './components/red';

const App = defineComponent({
  components: {
    BlueButton,
    RedButton
  },
  setup() {
    const showBlueButton = ref(true);
    const showRedButton = ref(true);

    const toggleBlueButton = () => {
      showBlueButton.value = !showBlueButton.value;
    };

    const toggleRedButton = () => {
      showRedButton.value = !showRedButton.value;
    };

    return {
      showBlueButton,
      showRedButton,
      toggleBlueButton,
      toggleRedButton
    };
  },
  template: `
    <div>
      <h1>Hello World</h1>
      <button @click="toggleBlueButton">Toggle Blue Button</button>
      <button @click="toggleRedButton">Toggle Red Button</button>
      <BlueButton v-if="showBlueButton" />
      <RedButton v-if="showRedButton" />
    </div>
  `,
});

createApp(App).mount('#app');