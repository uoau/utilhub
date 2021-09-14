import { getElemSiblings } from './index.js';

test('Test getElemSiblings', async () => {
    //demostart
    const div = document.createElement('DIV');
    div.innerHTML = `<ul>
        <li id="apple">apple</li>
        <li class="banana">banana</li>
        <li>pen</li>
    </ul>`;
    const appleDom = div.querySelector('#apple');
    const siblingElems = getElemSiblings(appleDom, '.banana');
    //demoend
    expect(siblingElems[0].classList.contain('.banana')).toBe(true);
});
