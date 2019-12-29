import React from "react";
import { shallow } from "enzyme";
import globalState from '../../mocks/storeMock';
import {TOGGLE_OVERVIEW} from '../../reducer';
import Hotel from './index';


describe("Hotel component test", () => {
  const defaultProps = {
    ...globalState.hotels[0],
    onToggle: jest.fn(),
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Hotel {...props} />);
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h3").text()).toBe("Aguamarina Golf Hotel");
    expect(wrapper.text()).toContain('Read less');
    expect(wrapper.find('img + span')).toHaveLength(1);
    wrapper.find('img + span').simulate('click');
    expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
  });
});
