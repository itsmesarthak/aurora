webpackJsonp([7],{588:function(n,e,a){var r=a(2),t=a(36),o=a(20).PageRenderer;o.__esModule&&(o=o.default);var i=t({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(599)}},componentWillMount:function(){},render:function(){return r.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,n.exports=i},599:function(n,e){n.exports='### Header Props\n\n```table\nspan: 6\nrows:\n  - Prop: deg\n    Type: object\n    Default: small = 76deg, medium = 80deg, large  = 81\n    Notes: Sets the gradient rotation per breakpoint\n  - Prop: from\n    Type: string\n    Default:\n    Notes: Starting gradient color\n  - Prop: to\n    Type: string\n    Default:\n    Notes: Ending gradient color\n```\n\n### Heading Props\n\n```table\nspan: 6\nrows:\n  - Prop: level\n    Type: number\n    Default: 2\n    Notes: Renders the appropriate h tag at level in number\n```\n\n```react\nresponsive: true\n---\n<Header>\n    <Heading level={1}>\n        <Heading.Strong>Generic</Heading.Strong>\n        {" "}\n        <Heading.Span>Header</Heading.Span>\n    </Heading>\n</Header>\n```\n\n### Image Header\n\n```react\nresponsive: true\n---\n<HeaderWithImage>\n  <Column medium={8}>\n    <Heading level={1}>\n        <Heading.Strong>Generic</Heading.Strong>\n        {" "}\n        <Heading.Span>Header</Heading.Span>\n    </Heading>\n  </Column>\n  <Column medium={4}>\n    <ImageHeader.ImageWrapper>\n      <ImageCard src="https://placekitten.com/g/400/242" />\n    </ImageHeader.ImageWrapper>\n  </Column>\n</HeaderWithImage>\n```\n'}});
//# sourceMappingURL=7.9e26cb6f.chunk.js.map