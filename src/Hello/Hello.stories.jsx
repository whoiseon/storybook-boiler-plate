import Hello from "./Hello";
import React from "react";

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello`와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정할 수 있습니다.
 */
export default {
  title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
  },
  argTypes: {
    name: { control: 'text', description: '이름' },
    big: { control: 'boolean' },
    onHello: { action: 'onHello' },
    onBye: { action: 'onBye' },
  },
};

export const standard = {
  args: {
    name: 'Storybook',
    big: false,
  },
}

export const big = {
  args: {
    name: 'Storybook',
    big: true,
  },
}