class Card extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("h2", null, this.props.title), /*#__PURE__*/
      React.createElement("div", { className: "line", style: { backgroundColor: this.props.bgc } }), /*#__PURE__*/
      React.createElement("p", null, this.props.content)));


  }}


class Link extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("a", { href: this.props.href }, this.props.text));

  }}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      yellow: '#fcd000',
      blue: '#0ebeff',
      green: '#47cf73',
      purple: '#ae63e4' };

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement(Card, { title: "Title One", bgc: this.state.yellow, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!" }), /*#__PURE__*/
      React.createElement(Card, { title: "Title Two", bgc: this.state.blue, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!" }), /*#__PURE__*/
      React.createElement(Card, { title: "Title Three", bgc: this.state.green, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!" }), /*#__PURE__*/
      React.createElement(Card, { title: "Title Four", bgc: this.state.purple, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!" })));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('app'));