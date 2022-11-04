import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';

/**
 * Whenever Jest runs it looks for "setupTests.js" inside of the /src
 * folder and executes its contents before any test file.  Now we can 
 * use Enzyme anywhere inside of our project.
 */
Enzyme.configure({adapter: new Adapter()});