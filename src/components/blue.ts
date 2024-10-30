import { defineComponent, ref } from 'vue';
import iconSvg from '../assets/icon.svg';

export default defineComponent({
  name: 'BlueButton',
  setup() {
    const showIcon = ref(false);
    const toggleIcon = () => {
      showIcon.value = !showIcon.value;
    };
    return { showIcon, toggleIcon, iconSvg };
  },
  template: `
    <div>
      <button class="blue-button" @click="toggleIcon">Blue Button</button>
      <img v-if="showIcon" :src="iconSvg" alt="Icon SVG">
    </div>
  `,
  style: `
    .blue-button {
      border: 2px solid blue;
      color: blue;
      padding: 10px;
      background: transparent;
      cursor: pointer;
    }
  `
});