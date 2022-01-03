import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Repos} from "./repos";

configure({
    adapter: new Adapter()
});

describe('<Repos />', () => {

    const props = [
        {
            id: 1,
            html_url: '',
            name: 'one'
        },
        {
            id: 2,
            html_url: '',
            name: 'two'
        }
    ];

        it('Should render two repos', () => {

            const wrapper = shallow(<Repos repos={props}/>);

            expect(wrapper.find('div')).toHaveLength(props.length * 2);

        })

});
