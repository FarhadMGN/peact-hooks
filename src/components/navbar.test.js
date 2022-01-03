import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Repos} from "./repos";
import {Navbar} from "./navbar";

configure({
    adapter: new Adapter()
});

describe('<Navbar />', () => {

    it('Should render two navigation item', () => {

        const wrapper = shallow(<Navbar/>);

        expect(wrapper.find('.nav-item')).toHaveLength(2);

    })

});
