import { html, TemplateResult } from 'lit';
import '../src/lit-application.js';

export default {
  title: 'LitApplication',
  component: 'lit-application',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-application style="--lit-application-background-color: ${backgroundColor}" .header=${header}></lit-application>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
