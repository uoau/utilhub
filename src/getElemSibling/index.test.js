import { getElemSibling } from './index.js';

test('Test getElemSibling', async () => {
    //demostart
    const div = document.createElement('DIV');
    div.innerHTML = `<ul>
        <li id="apple">apple</li>
        <li class="banana">banana</li>
        <li>pen</li>
    </ul>`;
    const appleDom = div.querySelector('#apple');
    const siblingElem = getElemSibling(appleDom, '.banana');
    //demoend
    expect(siblingElems.classList.contain('.banana')).toBe(true);
});
