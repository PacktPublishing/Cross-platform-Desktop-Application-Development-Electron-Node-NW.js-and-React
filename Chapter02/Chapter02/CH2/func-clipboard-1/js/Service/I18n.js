const EventEmitter = require( "events" );

/**
 * Class representing internationalization services
 * @fires I18nService#translated
 */
class I18nService extends EventEmitter {
  /**
   * Create I18nService
   * @param {dictionary} dictionary
   */
  constructor( dictionary ){
    super();
		this.dictionary = dictionary;
    this._locale = "en-US";
  }
  /**
   * Current locale accessor
   * @returns {String}
   */
  get locale(){
    return this._locale;
  }
  /**
   * Current locale mutator
   * @param {type} locale
   */
  set locale( locale ){
    // validate locale...
    this._locale = locale;
  }

	/**
   * Translate text
   * @param {string} token
   * @param {string} defaultValue
   * @returns {string}
   */
  translate( token, defaultValue ) {
    const dictionary = this.dictionary[ this._locale ];
    return dictionary[ token ] || defaultValue;
  }
  /**
   * Notify all the listeners there is an update
   */
  notify(){
    /**
     * Informs listeners that file system received new data
     * @event DirService#update
     * @type void
     */
    this.emit( "update" );
  }
}

exports.I18nService = I18nService;