// at-support stands for assistive technology support
export const tagsDataObject = {
    '!--...': {
      description: 'Defines a comment',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    '!DOCTYPE': {
      description: 'Defines the document type',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    a: {
      description: 'Defines a hyperlink',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    abbr: {
      description: 'Defines an abbreviation or an acronym',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    acronym: {
      description: 'Defines an acronym',
      deprecated: true,
      notes: 'Use <abbr> instead',
      'at-support': false
    },
    address: {
      description: 'Defines contact information for the author/owner of a document',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    applet: {
      description: 'Defines an embedded applet',
      deprecated: true,
      notes: 'Use <embed> or <object> instead',
      'at-support': false
    },
    area: {
      description: 'Defines an area inside an image map',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    article: {
      description: 'Defines an article',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    aside: {
      description: 'Defines content aside from the page content',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    audio: {
      description: 'Defines embedded sound content',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    b: {
      description: 'Defines bold text',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    base: {
      description: 'Specifies the base URL/target for all relative URLs in a document',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    basefont: {
      description: 'Specifies a default color',
      deprecated: false,
      notes: 'and font for all text in a document',
      'at-support': true
    },
    bdi: {
      description: 'Isolates a part of text that might be formatted in a different direction from other text outside it',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    bdo: {
      description: 'Overrides the current text direction',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    big: {
      description: 'Defines big text',
      deprecated: true,
      notes: 'Use CSS instead',
      'at-support': false
    },
    blockquote: {
      description: 'Defines a section that is quoted from another source',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    body: {
      description: "Defines the document's body",
      deprecated: false,
      notes: '',
      'at-support': false
    },
    br: {
      description: 'Defines a single line break',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    button: {
      description: 'Defines a clickable button',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    canvas: {
      description: 'Used to draw graphics',
      deprecated: false,
      notes: 'via scripting (usually JavaScript)',
      'at-support': false
    },
    caption: {
      description: 'Defines a table caption',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    center: {
      description: 'Defines centered text',
      deprecated: true,
      notes: 'Use CSS instead',
      'at-support': false
    },
    cite: {
      description: 'Defines the title of a work',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    code: {
      description: 'Defines a piece of computer code',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    col: {
      description: 'Specifies column properties for each column within a <colgroup> element',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    colgroup: {
      description: 'Specifies a group of one or more columns in a table for formatting',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    data: {
      description: 'Adds a machine-readable translation of a given content',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    datalist: {
      description: 'Specifies a list of pre-defined options for input controls',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    dd: {
      description: 'Defines a description/value of a term in a description list',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    del: {
      description: 'Defines text that has been deleted from a document',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    details: {
      description: 'Defines additional details that the user can view or hide',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    dfn: {
      description: 'Specifies a term that is going to be defined within the content',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    dialog: {
      description: 'Defines a dialog box or window',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    dir: {
      description: 'Defines a directory list',
      deprecated: true,
      notes: 'Use <ul> instead',
      'at-support': false
    },
    div: {
      description: 'Defines a section in a document',
      deprecated: false,
      notes: "It's a generic block-level container that has no special meaning. It should only be used when no other semantic element is relevant",
      'at-support': false
    },
    dl: {
      description: 'Defines a description list',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    dt: {
      description: 'Defines a term/name in a description list',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    em: {
      description: 'Defines emphasized text',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    embed: {
      description: 'Defines a container for an external application',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    fieldset: {
      description: 'Groups related elements in a form',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    figcaption: {
      description: 'Defines a caption for a <figure> element',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    figure: {
      description: 'Specifies self-contained content',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    font: {
      description: 'Defines font',
      deprecated: false,
      notes: 'and size for text',
      'at-support': true
    },
    footer: {
      description: 'Defines a footer for a document or section',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    form: {
      description: 'Defines an HTML form for user input',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    frame: {
      description: 'Defines a window (a frame) in a frameset',
      deprecated: true,
      notes: '',
      'at-support': false
    },
    frameset: {
      description: 'Defines a set of frames',
      deprecated: true,
      notes: '',
      'at-support': false
    },
    h1: {
      description: 'Defines a level 1 heading (the most important heading)',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    h2: {
      description: 'Defines a level 2 heading',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    h3: {
      description: 'Defines a level 3 heading',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    h4: {
      description: 'Defines a level 4 heading',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    h5: {
      description: 'Defines a level 5 heading',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    h6: {
      description: 'Defines a level 6 heading',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    head: {
      description: 'Contains metadata/information for the document',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    header: {
      description: 'Defines a header for a document or section',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    hgroup: {
      description: 'Defines a header and related content',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    hr: {
      description: 'Defines a thematic change in the content',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    html: {
      description: 'Defines the root of an HTML document',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    i: {
      description: 'Defines a part of text in an alternate voice or mood',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    iframe: {
      description: 'Defines an inline frame',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    image: {
      description: 'an ancient and poorly supported precursor to the <img> element. It should not be used',
      deprecated: true,
      notes: 'Use <img> instead',
      'at-support': false
    },
    img: {
      description: 'Defines an image',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    input: {
      description: 'Defines an input control',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    ins: {
      description: 'Defines a text that has been inserted into a document',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    kbd: {
      description: 'Defines keyboard input',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    label: {
      description: 'Defines a label for an <input> element',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    legend: {
      description: 'Defines a caption for a <fieldset> element',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    li: {
      description: 'Defines a list item',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    link: {
      description: 'Defines the relationship between a document and an external resource (most used to link to style sheets)',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    main: {
      description: 'Specifies the main content of a document',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    map: {
      description: 'Defines an image map',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    mark: {
      description: 'Defines marked/highlighted text',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    marquee: {
      description: 'Used to insert a scrolling area of text',
      deprecated: true,
      notes: '',
      'at-support': false
    },
    menu: {
      description: 'Defines an unordered list',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    menuitem: {
      description: 'Represents a command that a user is able to invoke through a popup menu',
      deprecated: true,
      notes: '',
      'at-support': false
    },
    meta: {
      description: 'Defines metadata about an HTML document',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    meter: {
      description: 'Defines a scalar measurement within a known range (a gauge)',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    nav: {
      description: 'Defines navigation links',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    nobr: {
      description: 'Prevents the text it contains from automatically wrapping across multiple lines',
      deprecated: true,
      notes: 'Use the CSS property white-space',
      'at-support': false
    },
    noembed: {
      description: 'Provides alternative content for browsers that do not support the <embed> element',
      deprecated: true,
      notes: 'Use <object> instead',
      'at-support': false
    },
    noframes: {
      description: 'Defines an alternate content for users that do not support frames',
      deprecated: true,
      notes: '',
      'at-support': false
    },
    noscript: {
      description: 'Defines an alternate content for users that do not support client-side scripts',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    object: {
      description: 'Defines a container for an external application',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    ol: {
      description: 'Defines an ordered list',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    optgroup: {
      description: 'Defines a group of related options in a drop-down list',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    option: {
      description: 'Defines an option in a drop-down list',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    output: {
      description: 'Defines the result of a calculation',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    p: {
      description: 'Defines a paragraph',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    param: {
      description: 'Defines a parameter for an object',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    picture: {
      description: 'Defines a container for multiple image resources',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    plaintext: {
      description: 'Renders everything following the start tag as raw text',
      deprecated: false,
      notes: 'TRUE',
      'at-support': false
    },
    portal: { description: '', deprecated: true, notes: '', 'at-support': false },
    pre: {
      description: 'Defines preformatted text',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    progress: {
      description: 'Represents the progress of a task',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    q: {
      description: 'Defines a short quotation',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    rb: {
      description: 'Used to delimit the base text component of a <ruby> annotation',
      deprecated: true,
      notes: '',
      'at-support': false
    },
    rp: {
      description: 'Defines what to show in browsers that do not support ruby annotations',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    rt: {
      description: 'Defines an explanation/pronunciation of characters (for East Asian typography)',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    rtc: {
      description: 'Embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element',
      deprecated: true,
      notes: '',
      'at-support': false
    },
    ruby: {
      description: 'Defines a ruby annotation (for East Asian typography)',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    s: {
      description: 'Defines text that is no longer correct',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    samp: {
      description: 'Defines sample output from a computer program',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    script: {
      description: 'Defines a client-side script',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    search: {
      description: 'Defines a search section',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    section: {
      description: 'Defines a section in a document',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    select: {
      description: 'Defines a drop-down list',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    slot: {
      description: 'Defines a placeholder inside a web component that you can fill with your own markup',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    small: {
      description: 'Defines smaller text',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    source: {
      description: 'Defines multiple media resources for media elements (<video> and <audio>)',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    span: {
      description: 'Defines a section in a document',
      deprecated: false,
      notes: "It's a generic inline-level container that has no special meaning. It should only be used when no other semantic element is relevant",
      'at-support': false
    },
    strike: {
      description: 'Defines strikethrough text',
      deprecated: true,
      notes: 'Use <del> or <s> instead',
      'at-support': false
    },
    strong: {
      description: 'Defines important text',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    style: {
      description: 'Defines style information for a document',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    sub: {
      description: 'Defines subscripted text',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    summary: {
      description: 'Defines a visible heading for a <details> element',
      deprecated: false,
      notes: 'Many',
      'at-support': false
    },
    sup: {
      description: 'Defines superscripted text',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    svg: {
      description: 'Defines a container for SVG graphics',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    table: {
      description: 'Defines a table',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    tbody: {
      description: 'Groups the body content in a table',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    td: {
      description: 'Defines a cell in a table',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    template: {
      description: 'Defines a container for content that should be hidden when the page loads',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    textarea: {
      description: 'Defines a multiline input control (text area)',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    tfoot: {
      description: 'Groups the footer content in a table',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    th: {
      description: 'Defines a header cell in a table',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    thead: {
      description: 'Groups the header content in a table',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    time: {
      description: 'Defines a specific time (or datetime)',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    title: {
      description: 'Defines a title for the document',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    tr: {
      description: 'Defines a row in a table',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    track: {
      description: 'Defines text tracks for media elements (<video> and <audio>)',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    tt: {
      description: 'Defines teletype text',
      deprecated: true,
      notes: 'Use CSS instead',
      'at-support': false
    },
    u: {
      description: 'Defines some text that is unarticulated and styled differently from normal text',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    ul: {
      description: 'Defines an unordered list',
      deprecated: false,
      notes: '',
      'at-support': true
    },
    var: {
      description: 'Defines a variable',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    video: {
      description: 'Defines embedded video content',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    wbr: {
      description: 'Defines a possible line-break',
      deprecated: false,
      notes: '',
      'at-support': false
    },
    xmp: {
      description: 'Renders text between the start and end tags without interpreting the HTML in between and using a monospaced font',
      deprecated: true,
      notes: 'Use <pre> and <code> instead',
      'at-support': false
    }
}