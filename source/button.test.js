import React from 'react';
import Button from './button';
import { shallow, mount } from 'enzyme';

describe('<Button />', () => {
    it('should render a button', () => {
        const render = shallow(<Button />);

        expect(render).toMatchSnapshot();
    })

    it('should accept the prop onClick and use it', () => {
        const testOnClick = jest.fn();
        const render = shallow(<Button onClick={testOnClick} />);

        render.simulate('click');

        expect(testOnClick).toBeCalled();
    })

    it('should accept a new className', () => {
        const render = shallow(<Button className="test-class" />);

        expect(render.find('.test-class').length).toBe(1);
    })

    it('should increment onClick', () => {
        const testOnClick = jest.fn();
        const render = mount(<Button onClick={testOnClick} />);
        const clickAmount = Math.ceil((Math.random() * 10) / 3);

        for (let i = 0; i < clickAmount; i++) {
            render.simulate('click');
        }

        expect(render.state().count).toBe(clickAmount);
    })
})
