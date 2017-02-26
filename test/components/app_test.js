import { renderComponent , expect } from '../test_helper';
import faker from 'faker';
import moment from 'moment';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should render the app component', () => {
    expect(component).to.exist;
  });
});
