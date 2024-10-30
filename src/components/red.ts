import { defineComponent, ref } from 'vue';
import iconSvg from '../assets/icon.svg';

export default defineComponent({
  name: 'RedButton',
  setup() {
    const showIcon = ref(false);
    const toggleIcon = () => {
      showIcon.value = !showIcon.value;
    };
    return { showIcon, toggleIcon, iconSvg };
  },
  template: `
    <div>
      <button class="red-button" @click="toggleIcon">Red Button</button>
      <img v-if="showIcon" :src="iconSvg" alt="Icon SVG">
    </div>
  `,
  style: `
    .red-button {
      border: 2px solid red;
      color: red;
      padding: 10px;
      background: transparent;
      cursor: pointer;
    }
  `
});