'use strict';

let navigationButton = document.querySelector(".footer__button--navigation");
let navigationList = document.querySelector(".navigation__list-container");
let officeButton = document.querySelector(".footer__button--office");
let officeList = document.querySelector(".footer__list--office");

navigationButton.classList.add("footer__button--close");
officeButton.classList.add("footer__button--close");
navigationList.classList.add("footer__list--hide");
officeList.classList.add("footer__list--hide");

let openAccordion = (button, list) => {
  if (button.classList.contains("footer__button--close")) {
    let buttons = document.querySelectorAll(".footer__button--open");
    buttons.forEach(button => button.classList.add("footer__button--close"));
    button.classList.remove("footer__button--close");
    navigationList.classList.add("footer__list--hide");
    officeList.classList.add("footer__list--hide");
    list.classList.remove("footer__list--hide");
  } else {
    button.classList.add("footer__button--close");
    list.classList.add("footer__list--hide");
  };
};

navigationButton.addEventListener('click', () => openAccordion(navigationButton, navigationList));

officeButton.addEventListener('click', () => openAccordion(officeButton, officeList));


window.addEventListener('DOMContentLoaded', function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function mask(event) {
    const matrix = '+7 (___) ___ ____';
    let i = 0;
    const def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && i < val.length) {
        return val.charAt(i++);
      } else {
        return i >= val.length ? '' : a;
      }
    });
    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  const input = document.querySelector('#tel');
  input.addEventListener('input', mask, false);
  input.addEventListener('focus', mask, false);
  input.addEventListener('blur', mask, false);
});