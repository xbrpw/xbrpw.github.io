function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import fitty from "https://cdn.skypack.dev/fitty@2.3.6";
import * as reactPopper from "https://cdn.skypack.dev/react-popper@2.3.0";
import * as PopperjsCore from "https://cdn.skypack.dev/@popperjs/core@2.11.5";

const majors = [
{ number: "0", name: "The Fool", symbol: "🤡", meaning: 'innocence, new beginnings, free spirit' },
{ number: "I", name: "The Magician", symbol: "🔮", meaning: 'willpower, desire, creation, manifestation' },
{ number: "II", name: "The High Priestess", symbol: "🌙", meaning: 'intuitive, unconscious, inner voice' },
{ number: "III", name: "The Empress", symbol: "👸", meaning: 'motherhood, fertility, nature' },
{ number: "IV", name: "The Emperor", symbol: "🤴", meaning: 'authority, structure, control' },
{ number: "V", name: "The Hierophant", symbol: "🙏", meaning: 'tradition, conformity, morality' },
{ number: "VI", name: "The Lovers", symbol: "💕", meaning: 'partnerships, duality, union' },
{ number: "VII", name: "The Chariot", symbol: "🎠", meaning: 'direction, control, willpower' },
{ number: "VIII", name: "Strength", symbol: "🦁", meaning: 'inner strength, bravery, compassion, focus' },
{ number: "IX", name: "The Hermit", symbol: "💡", meaning: 'contemplation, search for truth, inner guidance' },
{ number: "X", name: "Wheel of Fortune", symbol: "🥠", meaning: 'change, cycles, inevitable fate' },
{ number: "XI", name: "Justice", symbol: "⚖️", meaning: 'cause and effect, clarity, truth' },
{ number: "XII", name: "The Hanged Man", symbol: "🦶", meaning: 'sacrifice, release, martyrdom' },
{ number: "XIII", name: "Death", symbol: "💀", meaning: 'end of cycle, beginnings, change, metamorphosis' },
{ number: "XIV", name: "Temperance", symbol: "🥂", meaning: 'middle path, patience, finding meaning' },
{ number: "XV", name: "The Devil", symbol: "😈", meaning: 'addiction, materialism, playfulness' },
{ number: "XVI", name: "The Tower", symbol: "🌋", meaning: 'sudden upheaval, broken pride, disaster' },
{ number: "XVII", name: "The Star", symbol: "⭐", meaning: 'hope, faith, rejuvenation' },
{ number: "XVIII", name: "The Moon", symbol: "🌑", meaning: 'unconscious, illusions, intuition' },
{ number: "XIX", name: "The Sun", symbol: "☀️", meaning: 'joy, success, celebration, positivity' },
{ number: "XX", name: "Judgement", symbol: "🎺", meaning: 'reflection, reckoning, awakening' },
{ number: "XXI", name: "The World", symbol: "🌐", meaning: 'fulfillment, harmony, completion' }];


const getSuitSymbol = suit => {
  switch (suit) {
    case "wands":
      return "🌿";
    case "pentacles":
      return "💰";
    case "swords":
      return "🗡️";
    case "cups":
      return "☕";
    default:
      return "";}

};
const numberNames = [
"",
"ace",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine",
"ten",
"page",
"knight",
"queen",
"king"];


const capitalizeFirst = string => {
  return string[0].toUpperCase() + string.slice(1);
};
const startCase = string => {
  return string.
  split('_').
  map(substr => capitalizeFirst(substr)).
  join(' ');
};

const getMinorName = (suit, number) => {
  return `${capitalizeFirst(numberNames[number])} of ${capitalizeFirst(suit)}`;
};
const generateMinors = suit => {
  return Array(14).
  fill(null).
  map((_, i) => {
    const number = i + 1;
    return {
      number: number > 1 && number <= 10 ? number : undefined,
      symbol: getSuitSymbol(suit),
      name: getMinorName(suit, number),
      isNumeric: number <= 10 };

  });
};
const minors = ["wands", "pentacles", "swords", "cups"].
map(suit => generateMinors(suit)).
flat();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomBoolean() {
  return !!Math.round(Math.random());
}

function drawCard(deck, index) {
  const card = deck[index];
  deck.splice(index, 1);
  return card;
}
function drawRandomCard(deck, useReversed = false) {
  const index = randomInt(0, deck.length - 1);
  const card = drawCard(deck, index);

  if (useReversed) {
    card.isReversed = randomBoolean();
  }

  return card;
}

function CardNumber(props) {
  const { number } = props;
  return /*#__PURE__*/(
    React.createElement("div", { className: `card_number ${!number && "empty"}` }, number || "?"));

}
function CardSymbol(props) {
  const { symbol, number, isNumeric } = props;

  return /*#__PURE__*/(
    React.createElement("div", { className: "card_symbol" },
    symbol));


}
function CardName(props) {
  const { name } = props;
  return /*#__PURE__*/(
    React.createElement("div", { className: "card_name" },
    name));


}
const CardMeaning = React.forwardRef((props, ref) => {
  const { show, ...rest } = props;
  return /*#__PURE__*/(
    React.createElement("div", _extends({
      ref: ref,
      className: `card_meaning ${show ? 'show' : ''}` },
    rest)));


});
function CardSide(props) {
  const { type, isReversed, children } = props;

  return /*#__PURE__*/(
    React.createElement("div", { className: `card-${type} ${isReversed ? 'reversed' : ''}` }, children));

}
function Card(props) {
  const { card, onFlip } = props;

  const referenceElement = React.useRef(null);
  console.log(referenceElement.current);
  const popperElement = React.useRef(null);
  const { styles, attributes } = reactPopper.usePopper(referenceElement.current, popperElement.current, {
    modifiers: [
    {
      name: "offset",
      options: { offset: [0, 10] } }] });



  console.log(styles, attributes);
  const [showMeaning, setShowMeaning] = React.useState(false);

  const handleClick = () => {
    onFlip();
    if (card !== null && card !== void 0 && card.meaning && card !== null && card !== void 0 && card.isFlipped) {setShowMeaning(current => !current);}
  };
  React.useEffect(() => {
    if (showMeaning && !(card !== null && card !== void 0 && card.isFlipped)) {
      setShowMeaning(false);
    }
  }, [showMeaning, card === null || card === void 0 ? void 0 : card.isFlipped]);

  return /*#__PURE__*/(
    React.createElement("div", {
      className: `card ${card !== null && card !== void 0 && card.isFlipped ? "card-flip" : ''}`,
      onClick: handleClick,
      ref: referenceElement }, /*#__PURE__*/

    React.createElement(CardSide, { type: "back" }, /*#__PURE__*/
    React.createElement(CardSymbol, { symbol: "\uD83E\uDDFF" })), /*#__PURE__*/

    React.createElement(CardSide, {
      type: "front",
      isReversed: card === null || card === void 0 ? void 0 : card.isReversed }, /*#__PURE__*/

    React.createElement(CardNumber, { number: card === null || card === void 0 ? void 0 : card.number }), /*#__PURE__*/
    React.createElement(CardSymbol, {
      symbol: card === null || card === void 0 ? void 0 : card.symbol,
      isNumeric: card === null || card === void 0 ? void 0 : card.isNumeric,
      number: card === null || card === void 0 ? void 0 : card.number }), /*#__PURE__*/

    React.createElement(CardName, { name: card === null || card === void 0 ? void 0 : card.name })),


    ReactDOM.createPortal( /*#__PURE__*/
    React.createElement(CardMeaning, _extends({
      ref: popperElement,
      show: showMeaning,
      style: styles.popper },
    attributes.popper),

    card.meaning),

    document.querySelector('#portals'))));



}
function CardsLayout(props) {
  const { layout = 'three', children } = props;

  return /*#__PURE__*/(
    React.createElement("div", { class: `cards layout-${layout}` },
    children));


}

const LAYOUTS = [
{ name: 'three', cardsCount: 3 },
{ name: 'one', cardsCount: 1 },
{ name: 'five', cardsCount: 5 },
{ name: 'celtic_cross', cardsCount: 10 }
// { name: 'horseshoe', cardsCount: 7 },
];
const INITIAL_SETTINGS = {
  useReversed: false,
  layout: 'three' };

function settingsReducer(state = INITIAL_SETTINGS, action) {
  switch (action.type) {
    default:{
        return {
          ...state,
          [action.type]: action.payload };

      }}

}

function App() {
  const [cards, setCards] = React.useState([]);
  const [settings, setSettings] = React.
  useReducer(settingsReducer, INITIAL_SETTINGS);

  const onTellFortune = React.useCallback(() => {var _LAYOUTS$find;
    const cardsPool = [...majors, ...minors];
    const cardsCount = ((_LAYOUTS$find = LAYOUTS.find(layout => layout.name === settings.layout)) === null || _LAYOUTS$find === void 0 ? void 0 : _LAYOUTS$find.cardsCount) || 3;
    const cardsData = Array(cardsCount).
    fill(null).
    map(() => drawRandomCard(cardsPool, settings.useReversed));
    setCards(cardsData);
  }, [settings.useReversed, settings.layout]);

  const onCloseCards = () => {
    setCards(current => current.map(card => ({ ...card, isFlipped: false, isReversed: false })));
  };

  const onReset = () => {
    onCloseCards();
    setTimeout(onTellFortune, 1000);
  };

  const onFlipCard = React.useCallback(
  i => () => {
    setCards((current) =>
    current.map((card, j) => i === j ? { ...card, isFlipped: true } : card));

  },
  []);


  const onChangeSettings = event => {
    const type = event.target.name;
    const payload = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSettings({ type, payload });
  };

  React.useEffect(() => {
    onTellFortune();
  }, [onTellFortune]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("form", { className: "settings-form" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", name: "useReversed", id: "useReversed", onChange: onChangeSettings }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "useReversed" }, "Use Reversed"))), /*#__PURE__*/









    React.createElement(CardsLayout, { layout: settings.layout },
    cards.map((card, i) => /*#__PURE__*/
    React.createElement(Card, { key: card.name, card: card, onFlip: onFlipCard(i) }))), /*#__PURE__*/


    React.createElement("button", { type: "button", class: "fortune_btn", onClick: onReset, disabled: cards.some(card => !card.isFlipped) }, "Fortunate Again")));




}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));