"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkmetaScore"] = (typeof self !== 'undefined' ? self : this)["webpackChunkmetaScore"] || []).push([[251],{

/***/ 91274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ createEditor; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(76201);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(34338);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-alignment/src/index.js + 5 modules
var src = __webpack_require__(30497);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-block-quote/src/index.js + 4 modules
var ckeditor5_block_quote_src = __webpack_require__(14466);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-basic-styles/src/index.js + 27 modules
var ckeditor5_basic_styles_src = __webpack_require__(95269);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-essentials/src/index.js + 8 modules
var ckeditor5_essentials_src = __webpack_require__(48033);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-font/src/index.js + 26 modules
var ckeditor5_font_src = __webpack_require__(76206);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-html-support/src/index.js + 39 modules
var ckeditor5_html_support_src = __webpack_require__(50912);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-heading/src/index.js + 8 modules
var ckeditor5_heading_src = __webpack_require__(21852);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-image/src/index.js + 59 modules
var ckeditor5_image_src = __webpack_require__(51701);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-indent/src/index.js + 7 modules
var ckeditor5_indent_src = __webpack_require__(65399);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-link/src/index.js + 13 modules
var ckeditor5_link_src = __webpack_require__(68996);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-list/src/index.js + 49 modules
var ckeditor5_list_src = __webpack_require__(99874);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-paragraph/src/index.js + 4 modules
var ckeditor5_paragraph_src = __webpack_require__(43125);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-remove-format/src/index.js + 5 modules
var ckeditor5_remove_format_src = __webpack_require__(41404);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-source-editing/src/index.js + 3 modules
var ckeditor5_source_editing_src = __webpack_require__(662);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-special-characters/src/index.js + 12 modules
var ckeditor5_special_characters_src = __webpack_require__(92879);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-table/src/index.js + 81 modules
var ckeditor5_table_src = __webpack_require__(20735);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(30050);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(60228);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.to-string-tag.js
var es_reflect_to_string_tag = __webpack_require__(76034);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(52514);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(18539);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17016);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(92772);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(92646);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(44243);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-core/src/index.js + 75 modules
var ckeditor5_core_src = __webpack_require__(98900);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(95158);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(24795);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(38077);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(268);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-engine/src/index.js + 125 modules
var ckeditor5_engine_src = __webpack_require__(15530);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-typing/src/index.js + 14 modules
var ckeditor5_typing_src = __webpack_require__(18178);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-clipboard/src/index.js + 10 modules
var ckeditor5_clipboard_src = __webpack_require__(49497);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-utils/src/index.js + 60 modules
var ckeditor5_utils_src = __webpack_require__(73082);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(70560);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(47522);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(89730);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(36585);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(752);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(19649);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(76265);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(64043);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(7409);
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/utils/automaticdecorators.js










/**
 * Helper class that ties together all {@link module:link/link~LinkDecoratorAutomaticDefinition} and provides
 * the {@link module:engine/conversion/downcasthelpers~DowncastHelpers#attributeToElement downcast dispatchers} for them.
 */
var AutomaticDecorators = /*#__PURE__*/function () {
  function AutomaticDecorators() {
    (0,classCallCheck/* default */.Z)(this, AutomaticDecorators);
    /**
     * Stores the definition of {@link module:link/link~LinkDecoratorAutomaticDefinition automatic decorators}.
     * This data is used as a source for a downcast dispatcher to create a proper conversion to output data.
     *
     * @private
     * @type {Set}
     */
    this._definitions = new Set();
  }

  /**
   * Gives information about the number of decorators stored in the {@link module:link/utils~AutomaticDecorators} instance.
   *
   * @readonly
   * @protected
   * @type {Number}
   */
  (0,createClass/* default */.Z)(AutomaticDecorators, [{
    key: "length",
    get: function get() {
      return this._definitions.size;
    }

    /**
     * Adds automatic decorator objects or an array with them to be used during downcasting.
     *
     * @param {module:link/link~LinkDecoratorAutomaticDefinition|Array.<module:link/link~LinkDecoratorAutomaticDefinition>} item
     * A configuration object of automatic rules for decorating links. It might also be an array of such objects.
     */
  }, {
    key: "add",
    value: function add(item) {
      var _this = this;
      if (Array.isArray(item)) {
        item.forEach(function (item) {
          return _this._definitions.add(item);
        });
      } else {
        this._definitions.add(item);
      }
    }

    /**
     * Provides the conversion helper used in the {@link module:engine/conversion/downcasthelpers~DowncastHelpers#add} method.
     *
     * @returns {Function} A dispatcher function used as conversion helper
     * in {@link module:engine/conversion/downcasthelpers~DowncastHelpers#add}.
     */
  }, {
    key: "getDispatcher",
    value: function getDispatcher() {
      var _this2 = this;
      return function (dispatcher) {
        dispatcher.on("attribute:behaviorTrigger", function (evt, data, conversionApi) {
          // There is only test as this behavior decorates links and
          // it is run before dispatcher which actually consumes this node.
          // This allows on writing own dispatcher with highest priority,
          // which blocks both native converter and this additional decoration.
          if (!conversionApi.consumable.test(data.item, "attribute:behaviorTrigger")) {
            return;
          }

          // Automatic decorators for block links are handled e.g. in LinkImageEditing.
          if (!(data.item.is("selection") || conversionApi.schema.isInline(data.item))) {
            return;
          }
          var viewWriter = conversionApi.writer;
          var viewSelection = viewWriter.document.selection;
          var _iterator = (0,createForOfIteratorHelper/* default */.Z)(_this2._definitions),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              var viewElement = viewWriter.createAttributeElement("a", item.attributes, {
                priority: 5
              });
              if (item.classes) {
                viewWriter.addClass(item.classes, viewElement);
              }
              for (var key in item.styles) {
                viewWriter.setStyle(key, item.styles[key], viewElement);
              }
              viewWriter.setCustomProperty("behaviorTrigger", true, viewElement);
              if (item.callback(data.attributeNewValue)) {
                if (data.item.is("selection")) {
                  viewWriter.wrap(viewSelection.getFirstRange(), viewElement);
                } else {
                  viewWriter.wrap(conversionApi.mapper.toViewRange(data.range), viewElement);
                }
              } else {
                viewWriter.unwrap(conversionApi.mapper.toViewRange(data.range), viewElement);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }, {
          priority: "high"
        });
      };
    }
  }]);
  return AutomaticDecorators;
}();

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/utils/index.js






/**
 * A keystroke used by the {@link module:link/linkui~LinkUI link UI feature}.
 */
var TRIGGER_KEYSTROKE = "Ctrl+T";

/**
 * Returns `true` if a given view node is the link element.
 *
 * @param {module:engine/view/node~Node} node
 * @returns {Boolean}
 */
function isLinkElement(node) {
  return node.is("attributeElement") && !!node.getCustomProperty("behaviorTrigger");
}

/**
 * Creates a behavior trigger with the provided `id` attribute.
 *
 * @param {String} id
 * @param {module:engine/conversion/downcastdispatcher~DowncastConversionApi} conversionApi
 * @returns {module:engine/view/attributeelement~AttributeElement}
 */
function createBehaviorTriggerElement(id, _ref) {
  var writer = _ref.writer;
  // Priority 5 - https://github.com/ckeditor/ckeditor5-link/issues/121.
  var behaviorTriggerElement = writer.createAttributeElement("a", {
    "data-behavior-trigger": id
  }, {
    priority: 5
  });
  writer.setCustomProperty("behaviorTrigger", true, behaviorTriggerElement);
  return behaviorTriggerElement;
}

/**
 * Converts an object with defined decorators to a normalized array of decorators. The `id` key is added for each decorator and
 * is used as the attribute's name in the model.
 *
 * @param {Object.<String, module:link/link~LinkDecoratorDefinition>} decorators
 * @returns {Array.<module:link/link~LinkDecoratorDefinition>}
 */
function normalizeDecorators(decorators) {
  var retArray = [];
  if (decorators) {
    for (var _i = 0, _Object$entries = Object.entries(decorators); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      var decorator = Object.assign({}, value, {
        id: `link${upperFirst(key)}`
      });
      retArray.push(decorator);
    }
  }
  return retArray;
}

/**
 * Returns `true` if the specified `element` can be linked (the element allows the `behaviorTrigger` attribute).
 *
 * @params {module:engine/model/element~Element|null} element
 * @params {module:engine/model/schema~Schema} schema
 * @returns {Boolean}
 */
function isTriggerableElement(element, schema) {
  if (!element) {
    return false;
  }
  return schema.checkAttribute(element.name, "behaviorTrigger");
}
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/addbehaviortriggercommand.js














function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }





/**
 * The link command. It is used by the {@link module:link/link~Link link feature}.
 *
 * @extends module:core/command~Command
 */
var AddBehaviorTriggerCommand = /*#__PURE__*/function (_Command) {
  (0,inherits/* default */.Z)(AddBehaviorTriggerCommand, _Command);
  /**
   * The value of the `'behaviorTrigger'` attribute if the start of the selection is located in a node with this attribute.
   *
   * @observable
   * @readonly
   * @member {Object|undefined} #value
   */

  function AddBehaviorTriggerCommand(editor) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, AddBehaviorTriggerCommand);
    _this = _callSuper(this, AddBehaviorTriggerCommand, [editor]);

    /**
     * A collection of {@link module:link/utils~ManualDecorator manual decorators}
     * corresponding to the {@link module:link/link~LinkConfig#decorators decorator configuration}.
     *
     * You can consider it a model with states of manual decorators added to the currently selected link.
     *
     * @readonly
     * @type {module:utils/collection~Collection}
     */
    _this.manualDecorators = new ckeditor5_utils_src/* Collection */.FE();

    /**
     * An instance of the helper that ties together all {@link module:link/link~LinkDecoratorAutomaticDefinition}
     * that are used by the {@glink features/link link} and the {@glink features/images/images-linking linking images} features.
     *
     * @readonly
     * @type {module:link/utils~AutomaticDecorators}
     */
    _this.automaticDecorators = new AutomaticDecorators();
    return _this;
  }

  /**
   * Synchronizes the state of {@link #manualDecorators} with the currently present elements in the model.
   */
  (0,createClass/* default */.Z)(AddBehaviorTriggerCommand, [{
    key: "restoreManualDecoratorStates",
    value: function restoreManualDecoratorStates() {
      var _iterator = (0,createForOfIteratorHelper/* default */.Z)(this.manualDecorators),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var manualDecorator = _step.value;
          manualDecorator.value = this._getDecoratorStateFromModel(manualDecorator.id);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "refresh",
    value: function refresh() {
      var model = this.editor.model;
      var selection = model.document.selection;
      var selectedElement = selection.getSelectedElement() || (0,ckeditor5_utils_src/* first */.Ps)(selection.getSelectedBlocks());

      // A check for any integration that allows linking elements (e.g. `LinkImage`).
      // Currently the selection reads attributes from text nodes only. See #7429 and #7465.
      if (isTriggerableElement(selectedElement, model.schema)) {
        this.value = selectedElement.getAttribute("behaviorTrigger");
        this.isEnabled = model.schema.checkAttribute(selectedElement, "behaviorTrigger");
      } else {
        this.value = selection.getAttribute("behaviorTrigger");
        this.isEnabled = model.schema.checkAttributeInSelection(selection, "behaviorTrigger");
      }
      var _iterator2 = (0,createForOfIteratorHelper/* default */.Z)(this.manualDecorators),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var manualDecorator = _step2.value;
          manualDecorator.value = this._getDecoratorStateFromModel(manualDecorator.id);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    /**
     * Executes the command.
     *
     * When the selection is non-collapsed, the `behaviorTrigger` attribute will be applied to nodes inside the selection, but only to
     * those nodes where the `behaviorTrigger` attribute is allowed (disallowed nodes will be omitted).
     *
     * When the selection is collapsed and is not inside the text with the `behaviorTrigger` attribute, a
     * new {@link module:engine/model/text~Text text node} with the `behaviorTrigger` attribute will be inserted in place of the caret, but
     * only if such element is allowed in this place. The `_data` of the inserted text will equal the `href` parameter.
     * The selection will be updated to wrap the just inserted text node.
     *
     * When the selection is collapsed and inside the text with the `behaviorTrigger` attribute, the attribute value will be updated.
     *
     * # Decorators and model attribute management
     *
     * There is an optional argument to this command that applies or removes model
     * {@glink framework/guides/architecture/editing-engine#text-attributes text attributes} brought by
     * {@link module:link/utils~ManualDecorator manual link decorators}.
     *
     * Text attribute names in the model correspond to the entries in the {@link module:link/link~LinkConfig#decorators configuration}.
     * For every decorator configured, a model text attribute exists with the "link" prefix. For example, a `'linkMyDecorator'` attribute
     * corresponds to `'myDecorator'` in the configuration.
     *
     * To learn more about link decorators, check out the {@link module:link/link~LinkConfig#decorators `config.link.decorators`}
     * documentation.
     *
     * Here is how to manage decorator attributes with the addBehaviorTrigger command:
     *
     *		const addBehaviorTriggerCommand = editor.commands.get( 'addBehaviorTrigger' );
     *
     *		// Adding a new decorator attribute.
     *		addBehaviorTriggerCommand.execute( 'my-trigger-id');
     *
     * **Note**: If the decorator attribute name is not specified, its state remains untouched.
     *
     * **Note**: {@link module:link/removeBehaviorTriggerCommand~RemoveBehaviorTriggerCommand#execute `RemoveBehaviorTriggerCommand#execute()`} removes all
     * decorator attributes.
     *
     * @fires execute
     * @param {String} id Trigger id.
     * @param {Object} [manualDecoratorIds={}] The information about manual decorator attributes to be applied or removed upon execution.
     */
  }, {
    key: "execute",
    value: function execute(id) {
      var _this2 = this;
      var manualDecoratorIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var model = this.editor.model;
      var selection = model.document.selection;
      // Stores information about manual decorators to turn them on/off when command is applied.
      var truthyManualDecorators = [];
      var falsyManualDecorators = [];
      for (var name in manualDecoratorIds) {
        if (manualDecoratorIds[name]) {
          truthyManualDecorators.push(name);
        } else {
          falsyManualDecorators.push(name);
        }
      }
      model.change(function (writer) {
        // If selection is collapsed then update selected link or insert new one at the place of caret.
        if (selection.isCollapsed) {
          var position = selection.getFirstPosition();

          // When selection is inside text with `behaviorTrigger` attribute.
          if (selection.hasAttribute("behaviorTrigger")) {
            // Then update `behaviorTrigger` value.
            var linkRange = (0,ckeditor5_typing_src/* findAttributeRange */.VD)(position, "behaviorTrigger", selection.getAttribute("behaviorTrigger"), model);
            writer.setAttribute("behaviorTrigger", id, linkRange);
            truthyManualDecorators.forEach(function (item) {
              writer.setAttribute(item, true, linkRange);
            });
            falsyManualDecorators.forEach(function (item) {
              writer.removeAttribute(item, linkRange);
            });

            // Put the selection at the end of the updated link.
            writer.setSelection(writer.createPositionAfter(linkRange.end.nodeBefore));
          }
          // If not then insert text node with `behaviorTrigger` attribute in place of caret.
          // However, since selection is collapsed, attribute value will be used as data for text node.
          // So, if `id` is empty, do not create text node.
          else if (id !== "") {
            var attributes = (0,ckeditor5_utils_src/* toMap */.qL)(selection.getAttributes());
            attributes.set("behaviorTrigger", id);
            truthyManualDecorators.forEach(function (item) {
              attributes.set(item, true);
            });
            var _model$insertContent = model.insertContent(writer.createText(id, attributes), position),
              positionAfter = _model$insertContent.end;

            // Put the selection at the end of the inserted link.
            // Using end of range returned from insertContent in case nodes with the same attributes got merged.
            writer.setSelection(positionAfter);
          }

          // Remove the `behaviorTrigger` attribute and all link decorators from the selection.
          // It stops adding a new content into the link element.
          ["behaviorTrigger"].concat(truthyManualDecorators, falsyManualDecorators).forEach(function (item) {
            writer.removeSelectionAttribute(item);
          });
        } else {
          // If selection has non-collapsed ranges, we change attribute on nodes inside those ranges
          // omitting nodes where the `behaviorTrigger` attribute is disallowed.
          var ranges = model.schema.getValidRanges(selection.getRanges(), "behaviorTrigger");

          // But for the first, check whether the `behaviorTrigger` attribute is allowed on selected blocks (e.g. the "image" element).
          var allowedRanges = [];
          var _iterator3 = (0,createForOfIteratorHelper/* default */.Z)(selection.getSelectedBlocks()),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var element = _step3.value;
              if (model.schema.checkAttribute(element, "behaviorTrigger")) {
                allowedRanges.push(writer.createRangeOn(element));
              }
            }

            // Ranges that accept the `behaviorTrigger` attribute. Since we will iterate over `allowedRanges`, let's clone it.
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          var rangesToUpdate = allowedRanges.slice();

          // For all selection ranges we want to check whether given range is inside an element that accepts the `behaviorTrigger` attribute.
          // If so, we don't want to propagate applying the attribute to its children.
          var _iterator4 = (0,createForOfIteratorHelper/* default */.Z)(ranges),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var range = _step4.value;
              if (_this2._isRangeToUpdate(range, allowedRanges)) {
                rangesToUpdate.push(range);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          var _iterator5 = (0,createForOfIteratorHelper/* default */.Z)(rangesToUpdate),
            _step5;
          try {
            var _loop = function _loop() {
              var range = _step5.value;
              writer.setAttribute("behaviorTrigger", id, range);
              truthyManualDecorators.forEach(function (item) {
                writer.setAttribute(item, true, range);
              });
              falsyManualDecorators.forEach(function (item) {
                writer.removeAttribute(item, range);
              });
            };
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      });
    }

    /**
     * Provides information whether a decorator with a given name is present in the currently processed selection.
     *
     * @private
     * @param {String} decoratorName The name of the manual decorator used in the model
     * @returns {Boolean} The information whether a given decorator is currently present in the selection.
     */
  }, {
    key: "_getDecoratorStateFromModel",
    value: function _getDecoratorStateFromModel(decoratorName) {
      var model = this.editor.model;
      var selection = model.document.selection;
      var selectedElement = selection.getSelectedElement();

      // A check for the `LinkImage` plugin. If the selection contains an element, get values from the element.
      // Currently the selection reads attributes from text nodes only. See #7429 and #7465.
      if (isTriggerableElement(selectedElement, model.schema)) {
        return selectedElement.getAttribute(decoratorName);
      }
      return selection.getAttribute(decoratorName);
    }

    /**
     * Checks whether specified `range` is inside an element that accepts the `behaviorTrigger` attribute.
     *
     * @private
     * @param {module:engine/view/range~Range} range A range to check.
     * @param {Array.<module:engine/view/range~Range>} allowedRanges An array of ranges created on elements where the attribute is accepted.
     * @returns {Boolean}
     */
  }, {
    key: "_isRangeToUpdate",
    value: function _isRangeToUpdate(range, allowedRanges) {
      var _iterator6 = (0,createForOfIteratorHelper/* default */.Z)(allowedRanges),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var allowedRange = _step6.value;
          // A range is inside an element that will have the `behaviorTrigger` attribute. Do not modify its nodes.
          if (allowedRange.containsRange(range)) {
            return false;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return true;
    }
  }]);
  return AddBehaviorTriggerCommand;
}(ckeditor5_core_src/* Command */.mY);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/removebehaviortriggercommand.js










function removebehaviortriggercommand_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }




/**
 * The unlink command. It is used by the {@link module:link/link~Link link plugin}.
 *
 * @extends module:core/command~Command
 */
var RemoveBehaviorTriggerCommand = /*#__PURE__*/function (_Command) {
  (0,inherits/* default */.Z)(RemoveBehaviorTriggerCommand, _Command);
  function RemoveBehaviorTriggerCommand() {
    (0,classCallCheck/* default */.Z)(this, RemoveBehaviorTriggerCommand);
    return removebehaviortriggercommand_callSuper(this, RemoveBehaviorTriggerCommand, arguments);
  }
  (0,createClass/* default */.Z)(RemoveBehaviorTriggerCommand, [{
    key: "refresh",
    value:
    /**
     * @inheritDoc
     */
    function refresh() {
      var model = this.editor.model;
      var selection = model.document.selection;
      var selectedElement = selection.getSelectedElement();

      // A check for any integration that allows linking elements (e.g. `LinkImage`).
      // Currently the selection reads attributes from text nodes only. See #7429 and #7465.
      if (isTriggerableElement(selectedElement, model.schema)) {
        this.isEnabled = model.schema.checkAttribute(selectedElement, "behaviorTrigger");
      } else {
        this.isEnabled = model.schema.checkAttributeInSelection(selection, "behaviorTrigger");
      }
    }

    /**
     * Executes the command.
     *
     * When the selection is collapsed, it removes the `behaviorTrigger` attribute from each node with the same `behaviorTrigger` attribute value.
     * When the selection is non-collapsed, it removes the `behaviorTrigger` attribute from each node in selected ranges.
     *
     * # Decorators
     *
     * If {@link module:link/link~LinkConfig#decorators `config.link.decorators`} is specified,
     * all configured decorators are removed together with the `behaviorTrigger` attribute.
     *
     * @fires execute
     */
  }, {
    key: "execute",
    value: function execute() {
      var editor = this.editor;
      var model = this.editor.model;
      var selection = model.document.selection;
      var addBehaviorTriggerCommand = editor.commands.get("addBehaviorTrigger");
      model.change(function (writer) {
        // Get ranges to unlink.
        var rangesToUnlink = selection.isCollapsed ? [(0,ckeditor5_typing_src/* findAttributeRange */.VD)(selection.getFirstPosition(), "behaviorTrigger", selection.getAttribute("behaviorTrigger"), model)] : model.schema.getValidRanges(selection.getRanges(), "behaviorTrigger");

        // Remove `behaviorTrigger` attribute from specified ranges.
        var _iterator = (0,createForOfIteratorHelper/* default */.Z)(rangesToUnlink),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var range = _step.value;
            writer.removeAttribute("behaviorTrigger", range);
            // If there are registered custom attributes, then remove them during unlink.
            if (addBehaviorTriggerCommand) {
              var _iterator2 = (0,createForOfIteratorHelper/* default */.Z)(addBehaviorTriggerCommand.manualDecorators),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var manualDecorator = _step2.value;
                  writer.removeAttribute(manualDecorator.id, range);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }]);
  return RemoveBehaviorTriggerCommand;
}(ckeditor5_core_src/* Command */.mY);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/behaviortriggerediting.js













function behaviortriggerediting_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }












var HIGHLIGHT_CLASS = "ck-behaviortrigger_selected";

/**
 * The behavior trigger engine feature.
 *
 * It introduces the `behaviorTrigger="id"` attribute in the model which renders to the view as a `<a data-behavior-trigger="id">` element
 * as well as `'addBehaviorTrigger'` and `'removeBehaviorTrigger'` commands.
 *
 * @extends module:core/plugin~Plugin
 */
var BehaviorTriggerEditing = /*#__PURE__*/function (_Plugin) {
  (0,inherits/* default */.Z)(BehaviorTriggerEditing, _Plugin);
  function BehaviorTriggerEditing() {
    (0,classCallCheck/* default */.Z)(this, BehaviorTriggerEditing);
    return behaviortriggerediting_callSuper(this, BehaviorTriggerEditing, arguments);
  }
  (0,createClass/* default */.Z)(BehaviorTriggerEditing, [{
    key: "init",
    value:
    /**
     * @inheritDoc
     */
    function init() {
      var editor = this.editor;

      // Allow link attribute on all inline nodes.
      editor.model.schema.extend("$text", {
        allowAttributes: "behaviorTrigger"
      });
      editor.conversion.for("dataDowncast").attributeToElement({
        model: "behaviorTrigger",
        view: createBehaviorTriggerElement
      });
      editor.conversion.for("editingDowncast").attributeToElement({
        model: "behaviorTrigger",
        view: function view(id, conversionApi) {
          return createBehaviorTriggerElement(id, conversionApi);
        }
      });
      editor.conversion.for("upcast").elementToAttribute({
        view: {
          name: "a",
          attributes: {
            "data-behavior-trigger": true
          }
        },
        model: {
          key: "behaviorTrigger",
          value: function value(viewElement) {
            return viewElement.getAttribute("data-behavior-trigger");
          }
        }
      });

      // Create commands.
      editor.commands.add("addBehaviorTrigger", new AddBehaviorTriggerCommand(editor));
      editor.commands.add("removeBehaviorTrigger", new RemoveBehaviorTriggerCommand(editor));

      // Enable two-step caret movement for `behaviorTrigger` attribute.
      var twoStepCaretMovementPlugin = editor.plugins.get(ckeditor5_typing_src/* TwoStepCaretMovement */.mh);
      twoStepCaretMovementPlugin.registerAttribute("behaviorTrigger");

      // Setup highlight over selected link.
      (0,ckeditor5_typing_src/* inlineHighlight */.Im)(editor, "behaviorTrigger", "a", HIGHLIGHT_CLASS);

      // Change the attributes of the selection in certain situations after the trigger was inserted into the document.
      this._enableInsertContentSelectionAttributesFixer();

      // Handle a click at the beginning/end of a trigger element.
      this._enableClickingAfterLink();

      // Handle typing over the trigger.
      this._enableTypingOverLink();

      // Handle removing the content after the trigger element.
      this._handleDeleteContentAfterLink();
    }

    /**
     * Starts listening to {@link module:engine/model/model~Model#event:insertContent} and corrects the model
     * selection attributes if the selection is at the end of a trigger after inserting the content.
     *
     * The purpose of this action is to improve the overall UX because the user is no longer "trapped" by the
     * `behaviorTrigger` attribute of the selection and they can type a "clean" (`behaviorTrigger`–less) text right away.
     *
     * See https://github.com/ckeditor/ckeditor5/issues/6053.
     *
     * @private
     */
  }, {
    key: "_enableInsertContentSelectionAttributesFixer",
    value: function _enableInsertContentSelectionAttributesFixer() {
      var editor = this.editor;
      var model = editor.model;
      var selection = model.document.selection;
      this.listenTo(model, "insertContent", function () {
        var nodeBefore = selection.anchor.nodeBefore;
        var nodeAfter = selection.anchor.nodeAfter;

        // NOTE: ↰ and ↱ represent the gravity of the selection.

        // The only truly valid case is:
        //
        //		                                 ↰
        //		...<$text behaviorTrigger="foo">INSERTED[]</$text>
        //
        // If the selection is not "trapped" by the `behaviorTrigger` attribute after inserting, there's nothing
        // to fix there.
        if (!selection.hasAttribute("behaviorTrigger")) {
          return;
        }

        // Filter out the following case where a trigger with the same id (e.g. <a data-behavior-trigger="foo">INSERTED</a>) is inserted
        // in the middle of an existing link:
        //
        // Before insertion:
        //		                       ↰
        //		<$text behaviorTrigger="foo">l[]ink</$text>
        //
        // Expected after insertion:
        //		                               ↰
        //		<$text behaviorTrigger="foo">lINSERTED[]ink</$text>
        //
        if (!nodeBefore) {
          return;
        }

        // Filter out the following case where the selection has the "behaviorTrigger" attribute because the
        // gravity is overridden and some text with another attribute (e.g. <b>INSERTED</b>) is inserted:
        //
        // Before insertion:
        //
        //		                       ↱
        //		<$text behaviorTrigger="foo">[]link</$text>
        //
        // Expected after insertion:
        //
        //		                                                          ↱
        //		<$text bold="true">INSERTED</$text><$text behaviorTrigger="foo">[]link</$text>
        //
        if (!nodeBefore.hasAttribute("behaviorTrigger")) {
          return;
        }

        // Filter out the following case where a link is a inserted in the middle (or before) another link
        // (different URLs, so they will not merge). In this (let's say weird) case, we can leave the selection
        // attributes as they are because the user will end up writing in one link or another anyway.
        //
        // Before insertion:
        //
        //		                       ↰
        //		<$text behaviorTrigger="foo">l[]ink</$text>
        //
        // Expected after insertion:
        //
        //		                                                             ↰
        //		<$text behaviorTrigger="foo">l</$text><$text behaviorTrigger="bar">INSERTED[]</$text><$text behaviorTrigger="foo">ink</$text>
        //
        if (nodeAfter && nodeAfter.hasAttribute("behaviorTrigger")) {
          return;
        }
        model.change(function (writer) {
          removeLinkAttributesFromSelection(writer, getLinkAttributesAllowedOnText(model.schema));
        });
      }, {
        priority: "low"
      });
    }

    /**
     * Starts listening to {@link module:engine/view/document~Document#event:mousedown} and
     * {@link module:engine/view/document~Document#event:selectionChange} and puts the selection before/after a link node
     * if clicked at the beginning/ending of the link.
     *
     * The purpose of this action is to allow typing around the link node directly after a click.
     *
     * See https://github.com/ckeditor/ckeditor5/issues/1016.
     *
     * @private
     */
  }, {
    key: "_enableClickingAfterLink",
    value: function _enableClickingAfterLink() {
      var editor = this.editor;
      var model = editor.model;
      editor.editing.view.addObserver(ckeditor5_engine_src/* MouseObserver */.dM);
      var clicked = false;

      // Detect the click.
      this.listenTo(editor.editing.view.document, "mousedown", function () {
        clicked = true;
      });

      // When the selection has changed...
      this.listenTo(editor.editing.view.document, "selectionChange", function () {
        if (!clicked) {
          return;
        }

        // ...and it was caused by the click...
        clicked = false;
        var selection = model.document.selection;

        // ...and no text is selected...
        if (!selection.isCollapsed) {
          return;
        }

        // ...and clicked text is the link...
        if (!selection.hasAttribute("behaviorTrigger")) {
          return;
        }
        var position = selection.getFirstPosition();
        var linkRange = (0,ckeditor5_typing_src/* findAttributeRange */.VD)(position, "behaviorTrigger", selection.getAttribute("behaviorTrigger"), model);

        // ...check whether clicked start/end boundary of the link.
        // If so, remove the `behaviorTrigger` attribute.
        if (position.isTouching(linkRange.start) || position.isTouching(linkRange.end)) {
          model.change(function (writer) {
            removeLinkAttributesFromSelection(writer, getLinkAttributesAllowedOnText(model.schema));
          });
        }
      });
    }

    /**
     * Starts listening to {@link module:engine/model/model~Model#deleteContent} and {@link module:engine/model/model~Model#insertContent}
     * and checks whether typing over the link. If so, attributes of removed text are preserved and applied to the inserted text.
     *
     * The purpose of this action is to allow modifying a text without loosing the `behaviorTrigger` attribute (and other).
     *
     * See https://github.com/ckeditor/ckeditor5/issues/4762.
     *
     * @private
     */
  }, {
    key: "_enableTypingOverLink",
    value: function _enableTypingOverLink() {
      var editor = this.editor;
      var view = editor.editing.view;

      // Selection attributes when started typing over the link.
      var selectionAttributes;

      // Whether pressed `Backspace` or `Delete`. If so, attributes should not be preserved.
      var deletedContent;

      // Detect pressing `Backspace` / `Delete`.
      this.listenTo(view.document, "delete", function () {
        deletedContent = true;
      }, {
        priority: "high"
      });

      // Listening to `model#deleteContent` allows detecting whether selected content was a link.
      // If so, before removing the element, we will copy its attributes.
      this.listenTo(editor.model, "deleteContent", function () {
        var selection = editor.model.document.selection;

        // Copy attributes only if anything is selected.
        if (selection.isCollapsed) {
          return;
        }

        // When the content was deleted, do not preserve attributes.
        if (deletedContent) {
          deletedContent = false;
          return;
        }

        // Enabled only when typing.
        if (!isTyping(editor)) {
          return;
        }
        if (shouldCopyAttributes(editor.model)) {
          selectionAttributes = selection.getAttributes();
        }
      }, {
        priority: "high"
      });

      // Listening to `model#insertContent` allows detecting the content insertion.
      // We want to apply attributes that were removed while typing over the link.
      this.listenTo(editor.model, "insertContent", function (evt, _ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 1),
          element = _ref2[0];
        deletedContent = false;

        // Enabled only when typing.
        if (!isTyping(editor)) {
          return;
        }
        if (!selectionAttributes) {
          return;
        }
        editor.model.change(function (writer) {
          var _iterator = (0,createForOfIteratorHelper/* default */.Z)(selectionAttributes),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = (0,slicedToArray/* default */.Z)(_step.value, 2),
                attribute = _step$value[0],
                value = _step$value[1];
              writer.setAttribute(attribute, value, element);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        selectionAttributes = null;
      }, {
        priority: "high"
      });
    }

    /**
     * Starts listening to {@link module:engine/model/model~Model#deleteContent} and checks whether
     * removing a content right after the "behaviorTrigger" attribute.
     *
     * If so, the selection should not preserve the `behaviorTrigger` attribute. However, if
     * the {@link module:typing/twostepcaretmovement~TwoStepCaretMovement} plugin is active and
     * the selection has the "behaviorTrigger" attribute due to overriden gravity (at the end), the `behaviorTrigger` attribute should stay untouched.
     *
     * The purpose of this action is to allow removing the link text and keep the selection outside the link.
     *
     * See https://github.com/ckeditor/ckeditor5/issues/7521.
     *
     * @private
     */
  }, {
    key: "_handleDeleteContentAfterLink",
    value: function _handleDeleteContentAfterLink() {
      var editor = this.editor;
      var model = editor.model;
      var selection = model.document.selection;
      var view = editor.editing.view;

      // A flag whether attributes `behaviorTrigger` attribute should be preserved.
      var shouldPreserveAttributes = false;

      // A flag whether the `Backspace` key was pressed.
      var hasBackspacePressed = false;

      // Detect pressing `Backspace`.
      this.listenTo(view.document, "delete", function (evt, data) {
        hasBackspacePressed = data.domEvent.keyCode === ckeditor5_utils_src/* keyCodes */.Do.backspace;
      }, {
        priority: "high"
      });

      // Before removing the content, check whether the selection is inside a link or at the end of link but with 2-SCM enabled.
      // If so, we want to preserve link attributes.
      this.listenTo(model, "deleteContent", function () {
        // Reset the state.
        shouldPreserveAttributes = false;
        var position = selection.getFirstPosition();
        var behaviorTrigger = selection.getAttribute("behaviorTrigger");
        if (!behaviorTrigger) {
          return;
        }
        var linkRange = (0,ckeditor5_typing_src/* findAttributeRange */.VD)(position, "behaviorTrigger", behaviorTrigger, model);

        // Preserve `behaviorTrigger` attribute if the selection is in the middle of the link or
        // the selection is at the end of the link and 2-SCM is activated.
        shouldPreserveAttributes = linkRange.containsPosition(position) || linkRange.end.isEqual(position);
      }, {
        priority: "high"
      });

      // After removing the content, check whether the current selection should preserve the `behaviorTrigger` attribute.
      this.listenTo(model, "deleteContent", function () {
        // If didn't press `Backspace`.
        if (!hasBackspacePressed) {
          return;
        }
        hasBackspacePressed = false;

        // Disable the mechanism if inside a link (`<$text url="foo">F[]oo</$text>` or <$text url="foo">Foo[]</$text>`).
        if (shouldPreserveAttributes) {
          return;
        }

        // Use `model.enqueueChange()` in order to execute the callback at the end of the changes process.
        editor.model.enqueueChange(function (writer) {
          removeLinkAttributesFromSelection(writer, getLinkAttributesAllowedOnText(model.schema));
        });
      }, {
        priority: "low"
      });
    }
  }], [{
    key: "pluginName",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return "BehaviorTriggerEditing";
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "requires",
    get: function get() {
      // Clipboard is required for handling cut and paste events while typing over the link.
      return [ckeditor5_typing_src/* TwoStepCaretMovement */.mh, ckeditor5_typing_src/* Input */.II, ckeditor5_clipboard_src/* ClipboardPipeline */._l];
    }
  }]);
  return BehaviorTriggerEditing;
}(ckeditor5_core_src/* Plugin */.Sy); // Make the selection free of link-related model attributes.
// All link-related model attributes start with "link". That includes not only "behaviorTrigger"
// but also all decorator attributes (they have dynamic names), or even custom plugins.
//
// @param {module:engine/model/writer~Writer} writer
// @param {Array.<String>} linkAttributes

function removeLinkAttributesFromSelection(writer, linkAttributes) {
  writer.removeSelectionAttribute("behaviorTrigger");
  var _iterator2 = (0,createForOfIteratorHelper/* default */.Z)(linkAttributes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var attribute = _step2.value;
      writer.removeSelectionAttribute(attribute);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

// Checks whether selection's attributes should be copied to the new inserted text.
//
// @param {module:engine/model/model~Model} model
// @returns {Boolean}
function shouldCopyAttributes(model) {
  var selection = model.document.selection;
  var firstPosition = selection.getFirstPosition();
  var lastPosition = selection.getLastPosition();
  var nodeAtFirstPosition = firstPosition.nodeAfter;

  // The text link node does not exist...
  if (!nodeAtFirstPosition) {
    return false;
  }

  // ...or it isn't the text node...
  if (!nodeAtFirstPosition.is("$text")) {
    return false;
  }

  // ...or isn't the link.
  if (!nodeAtFirstPosition.hasAttribute("behaviorTrigger")) {
    return false;
  }

  // `textNode` = the position is inside the link element.
  // `nodeBefore` = the position is at the end of the link element.
  var nodeAtLastPosition = lastPosition.textNode || lastPosition.nodeBefore;

  // If both references the same node selection contains a single text node.
  if (nodeAtFirstPosition === nodeAtLastPosition) {
    return true;
  }

  // If nodes are not equal, maybe the link nodes has defined additional attributes inside.
  // First, we need to find the entire link range.
  var linkRange = (0,ckeditor5_typing_src/* findAttributeRange */.VD)(firstPosition, "behaviorTrigger", nodeAtFirstPosition.getAttribute("behaviorTrigger"), model);

  // Then we can check whether selected range is inside the found link range. If so, attributes should be preserved.
  return linkRange.containsRange(model.createRange(firstPosition, lastPosition), true);
}

// Checks whether provided changes were caused by typing.
//
// @params {module:core/editor/editor~Editor} editor
// @returns {Boolean}
function isTyping(editor) {
  var currentBatch = editor.model.change(function (writer) {
    return writer.batch;
  });
  return currentBatch.isTyping;
}

// Returns an array containing names of the attributes allowed on `$text` that describes the link item.
//
// @param {module:engine/model/schema~Schema} schema
// @returns {Array.<String>}
function getLinkAttributesAllowedOnText(schema) {
  var textAttributes = schema.getDefinition("$text").allowAttributes;
  return textAttributes.filter(function (attribute) {
    return attribute.startsWith("behaviorTrigger");
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js
var get = __webpack_require__(68824);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(93374);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(57267);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(28436);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-ui/src/index.js + 94 modules
var ckeditor5_ui_src = __webpack_require__(56567);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-widget/src/index.js + 13 modules
var ckeditor5_widget_src = __webpack_require__(86149);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext.js
var viewtoplaintext = __webpack_require__(79546);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(50886);
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/ui/behaviortriggerformview.js
















function behaviortriggerformview_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }






/**
 * The link form view controller class.
 *
 * See {@link module:link/ui/linkformview~LinkFormView}.
 *
 * @extends module:ui/view~View
 */
var BehaviorTriggerFormView = /*#__PURE__*/function (_View) {
  (0,inherits/* default */.Z)(BehaviorTriggerFormView, _View);
  /**
   * Creates an instance of the {@link module:link/ui/linkformview~LinkFormView} class.
   *
   * Also see {@link #render}.
   *
   * @param {module:utils/locale~Locale} [locale] The localization services instance.
   * @param {module:link/linkcommand~LinkCommand} linkCommand Reference to {@link module:link/linkcommand~LinkCommand}.
   * @param {String} [protocol] A value of a protocol to be displayed in the input's placeholder.
   */
  function BehaviorTriggerFormView(locale, addBehaviorTriggerCommand) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, BehaviorTriggerFormView);
    _this = behaviortriggerformview_callSuper(this, BehaviorTriggerFormView, [locale]);
    var t = locale.t;

    /**
     * Tracks information about DOM focus in the form.
     *
     * @readonly
     * @member {module:utils/focustracker~FocusTracker}
     */
    _this.focusTracker = new ckeditor5_utils_src/* FocusTracker */.Rh();

    /**
     * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
     *
     * @readonly
     * @member {module:utils/keystrokehandler~KeystrokeHandler}
     */
    _this.keystrokes = new ckeditor5_utils_src/* KeystrokeHandler */.VD();

    /**
     * The id input view.
     *
     * @member {module:ui/labeledfield/labeledfieldview~LabeledFieldView}
     */
    _this.idInputView = _this._createIdInput();

    /**
     * The Save button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */
    _this.saveButtonView = _this._createButton(t("Save"), ckeditor5_core_src/* icons */.ci.check, "ck-button-save");
    _this.saveButtonView.type = "submit";

    /**
     * The Cancel button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */
    _this.cancelButtonView = _this._createButton(t("Cancel"), ckeditor5_core_src/* icons */.ci.cancel, "ck-button-cancel", "cancel");

    /**
     * A collection of {@link module:ui/button/switchbuttonview~SwitchButtonView},
     * which corresponds to {@link module:link/linkcommand~LinkCommand#manualDecorators manual decorators}
     * configured in the editor.
     *
     * @private
     * @readonly
     * @type {module:ui/viewcollection~ViewCollection}
     */
    _this._manualDecoratorSwitches = _this._createManualDecoratorSwitches(addBehaviorTriggerCommand);

    /**
     * A collection of child views in the form.
     *
     * @readonly
     * @type {module:ui/viewcollection~ViewCollection}
     */
    _this.children = _this._createFormChildren(addBehaviorTriggerCommand.manualDecorators);

    /**
     * A collection of views that can be focused in the form.
     *
     * @readonly
     * @protected
     * @member {module:ui/viewcollection~ViewCollection}
     */
    _this._focusables = new ckeditor5_ui_src/* ViewCollection */.vX();

    /**
     * Helps cycling over {@link #_focusables} in the form.
     *
     * @readonly
     * @protected
     * @member {module:ui/focuscycler~FocusCycler}
     */
    _this._focusCycler = new ckeditor5_ui_src/* FocusCycler */.I0({
      focusables: _this._focusables,
      focusTracker: _this.focusTracker,
      keystrokeHandler: _this.keystrokes,
      actions: {
        // Navigate form fields backwards using the Shift + Tab keystroke.
        focusPrevious: "shift + tab",
        // Navigate form fields forwards using the Tab key.
        focusNext: "tab"
      }
    });
    var classList = ["ck", "ck-behaviortrigger-form", "ck-responsive-form"];
    if (addBehaviorTriggerCommand.manualDecorators.length) {
      classList.push("ck-behaviortrigger-form_layout-vertical", "ck-vertical-form");
    }
    _this.setTemplate({
      tag: "form",
      attributes: {
        class: classList,
        // https://github.com/ckeditor/ckeditor5-link/issues/90
        tabindex: "-1"
      },
      children: _this.children
    });
    return _this;
  }

  /**
   * Obtains the state of the {@link module:ui/button/switchbuttonview~SwitchButtonView switch buttons} representing
   * {@link module:link/linkcommand~LinkCommand#manualDecorators manual link decorators}
   * in the {@link module:link/ui/linkformview~LinkFormView}.
   *
   * @returns {Object.<String,Boolean>} Key-value pairs, where the key is the name of the decorator and the value is
   * its state.
   */
  (0,createClass/* default */.Z)(BehaviorTriggerFormView, [{
    key: "getDecoratorSwitchesState",
    value: function getDecoratorSwitchesState() {
      return Array.from(this._manualDecoratorSwitches).reduce(function (accumulator, switchButton) {
        accumulator[switchButton.name] = switchButton.isOn;
        return accumulator;
      }, {});
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(BehaviorTriggerFormView.prototype), "render", this).call(this);
      (0,ckeditor5_ui_src/* submitHandler */.GI)({
        view: this
      });
      var childViews = [this.idInputView].concat((0,toConsumableArray/* default */.Z)(this._manualDecoratorSwitches), [this.saveButtonView, this.cancelButtonView]);
      childViews.forEach(function (v) {
        // Register the view as focusable.
        _this2._focusables.add(v);

        // Register the view in the focus tracker.
        _this2.focusTracker.add(v.element);
      });

      // Start listening for the keystrokes coming from #element.
      this.keystrokes.listenTo(this.element);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(BehaviorTriggerFormView.prototype), "destroy", this).call(this);
      this.focusTracker.destroy();
      this.keystrokes.destroy();
    }

    /**
     * Focuses the fist {@link #_focusables} in the form.
     */
  }, {
    key: "focus",
    value: function focus() {
      this._focusCycler.focusFirst();
    }

    /**
     * Creates a labeled input view.
     *
     * @private
     * @returns {module:ui/labeledfield/labeledfieldview~LabeledFieldView} Labeled field view instance.
     */
  }, {
    key: "_createIdInput",
    value: function _createIdInput() {
      var t = this.locale.t;
      var labeledInput = new ckeditor5_ui_src/* LabeledFieldView */.KP(this.locale, ckeditor5_ui_src/* createLabeledInputText */.R);
      labeledInput.label = t("Trigger ID");
      return labeledInput;
    }

    /**
     * Creates a button view.
     *
     * @private
     * @param {String} label The button label.
     * @param {String} icon The button icon.
     * @param {String} className The additional button CSS class name.
     * @param {String} [eventName] An event name that the `ButtonView#execute` event will be delegated to.
     * @returns {module:ui/button/buttonview~ButtonView} The button view instance.
     */
  }, {
    key: "_createButton",
    value: function _createButton(label, icon, className, eventName) {
      var button = new ckeditor5_ui_src/* ButtonView */.r5(this.locale);
      button.set({
        label,
        icon,
        tooltip: true
      });
      button.extendTemplate({
        attributes: {
          class: className
        }
      });
      if (eventName) {
        button.delegate("execute").to(this, eventName);
      }
      return button;
    }

    /**
     * Populates {@link module:ui/viewcollection~ViewCollection} of {@link module:ui/button/switchbuttonview~SwitchButtonView}
     * made based on {@link module:link/linkcommand~LinkCommand#manualDecorators}.
     *
     * @private
     * @param {module:link/linkcommand~LinkCommand} linkCommand A reference to the link command.
     * @returns {module:ui/viewcollection~ViewCollection} of switch buttons.
     */
  }, {
    key: "_createManualDecoratorSwitches",
    value: function _createManualDecoratorSwitches(addBehaviorTriggerCommand) {
      var _this3 = this;
      var switches = this.createCollection();
      var _iterator = (0,createForOfIteratorHelper/* default */.Z)(addBehaviorTriggerCommand.manualDecorators),
        _step;
      try {
        var _loop = function _loop() {
          var manualDecorator = _step.value;
          var switchButton = new ckeditor5_ui_src/* SwitchButtonView */.BM(_this3.locale);
          switchButton.set({
            name: manualDecorator.id,
            label: manualDecorator.label,
            withText: true
          });
          switchButton.bind("isOn").toMany([manualDecorator, addBehaviorTriggerCommand], "value", function (decoratorValue, commandValue) {
            return commandValue === undefined && decoratorValue === undefined ? manualDecorator.defaultValue : decoratorValue;
          });
          switchButton.on("execute", function () {
            manualDecorator.set("value", !switchButton.isOn);
          });
          switches.add(switchButton);
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return switches;
    }

    /**
     * Populates the {@link #children} collection of the form.
     *
     * If {@link module:link/linkcommand~LinkCommand#manualDecorators manual decorators} are configured in the editor, it creates an
     * additional `View` wrapping all {@link #_manualDecoratorSwitches} switch buttons corresponding
     * to these decorators.
     *
     * @private
     * @param {module:utils/collection~Collection} manualDecorators A reference to
     * the collection of manual decorators stored in the link command.
     * @returns {module:ui/viewcollection~ViewCollection} The children of link form view.
     */
  }, {
    key: "_createFormChildren",
    value: function _createFormChildren(manualDecorators) {
      var children = this.createCollection();
      children.add(this.idInputView);
      if (manualDecorators.length) {
        var additionalButtonsView = new ckeditor5_ui_src/* View */.G7();
        additionalButtonsView.setTemplate({
          tag: "ul",
          children: this._manualDecoratorSwitches.map(function (switchButton) {
            return {
              tag: "li",
              children: [switchButton],
              attributes: {
                class: ["ck", "ck-list__item"]
              }
            };
          }),
          attributes: {
            class: ["ck", "ck-reset", "ck-list"]
          }
        });
        children.add(additionalButtonsView);
      }
      children.add(this.saveButtonView);
      children.add(this.cancelButtonView);
      return children;
    }
  }]);
  return BehaviorTriggerFormView;
}(ckeditor5_ui_src/* View */.G7);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/theme/icons/removebehaviortrigger.svg
/* harmony default export */ var removebehaviortrigger = ("<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 22 22\">\n  <path d=\"m15.34 1.768-4.506 7.721 5.661.797v.329L6.687 20.26l-.028-.029 4.641-8.105-5.795-.852v-.329l9.782-9.205zM19.035 19.465 17.48 21.02a.824.824 0 1 1-1.207-1.125l.041-.041 1.555-1.557-1.557-1.555a.824.824 0 0 1 1.166-1.166l1.556 1.555 1.557-1.557a.825.825 0 1 1 1.166 1.168l-1.555 1.555 1.555 1.557a.824.824 0 1 1-1.166 1.166l-1.556-1.555z\"/>\n</svg>\n");
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/ui/behaviortriggeractionsview.js











function behaviortriggeractionsview_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }







/**
 * The link actions view class. This view displays the link preview, allows
 * unlinking or editing the link.
 *
 * @extends module:ui/view~View
 */
var BehaviorTriggerActionsView = /*#__PURE__*/function (_View) {
  (0,inherits/* default */.Z)(BehaviorTriggerActionsView, _View);
  /**
   * @inheritDoc
   */
  function BehaviorTriggerActionsView(locale) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, BehaviorTriggerActionsView);
    _this = behaviortriggeractionsview_callSuper(this, BehaviorTriggerActionsView, [locale]);
    var t = locale.t;

    /**
     * Tracks information about DOM focus in the actions.
     *
     * @readonly
     * @member {module:utils/focustracker~FocusTracker}
     */
    _this.focusTracker = new ckeditor5_utils_src/* FocusTracker */.Rh();

    /**
     * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
     *
     * @readonly
     * @member {module:utils/keystrokehandler~KeystrokeHandler}
     */
    _this.keystrokes = new ckeditor5_utils_src/* KeystrokeHandler */.VD();

    /**
     * The id preview view.
     *
     * @member {module:ui/view~View}
     */
    _this.previewLabelView = _this._createPreviewLabel();

    /**
     * The unlink button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */
    _this.removeTriggerButtonView = _this._createButton(t("Remove"), removebehaviortrigger, "removeBehaviorTrigger");

    /**
     * The edit link button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */
    _this.editButtonView = _this._createButton(t("Edit"), ckeditor5_core_src/* icons */.ci.pencil, "edit");

    /**
     * The value of the trigger "id" attribute of use in the {@link #previewLabelView}.
     *
     * @observable
     * @member {String}
     */
    _this.set("id");

    /**
     * A collection of views that can be focused in the view.
     *
     * @readonly
     * @protected
     * @member {module:ui/viewcollection~ViewCollection}
     */
    _this._focusables = new ckeditor5_ui_src/* ViewCollection */.vX();

    /**
     * Helps cycling over {@link #_focusables} in the view.
     *
     * @readonly
     * @protected
     * @member {module:ui/focuscycler~FocusCycler}
     */
    _this._focusCycler = new ckeditor5_ui_src/* FocusCycler */.I0({
      focusables: _this._focusables,
      focusTracker: _this.focusTracker,
      keystrokeHandler: _this.keystrokes,
      actions: {
        // Navigate fields backwards using the Shift + Tab keystroke.
        focusPrevious: "shift + tab",
        // Navigate fields forwards using the Tab key.
        focusNext: "tab"
      }
    });
    _this.setTemplate({
      tag: "div",
      attributes: {
        class: ["ck", "ck-behaviortrigger-actions", "ck-responsive-form"],
        // https://github.com/ckeditor/ckeditor5-link/issues/90
        tabindex: "-1"
      },
      children: [_this.previewLabelView, _this.editButtonView, _this.removeTriggerButtonView]
    });
    return _this;
  }

  /**
   * @inheritDoc
   */
  (0,createClass/* default */.Z)(BehaviorTriggerActionsView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(BehaviorTriggerActionsView.prototype), "render", this).call(this);
      var childViews = [this.previewLabelView, this.editButtonView, this.removeTriggerButtonView];
      childViews.forEach(function (v) {
        // Register the view as focusable.
        _this2._focusables.add(v);

        // Register the view in the focus tracker.
        _this2.focusTracker.add(v.element);
      });

      // Start listening for the keystrokes coming from #element.
      this.keystrokes.listenTo(this.element);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(BehaviorTriggerActionsView.prototype), "destroy", this).call(this);
      this.focusTracker.destroy();
      this.keystrokes.destroy();
    }

    /**
     * Focuses the fist {@link #_focusables} in the actions.
     */
  }, {
    key: "focus",
    value: function focus() {
      this._focusCycler.focusFirst();
    }

    /**
     * Creates a button view.
     *
     * @private
     * @param {String} label The button label.
     * @param {String} icon The button icon.
     * @param {String} [eventName] An event name that the `ButtonView#execute` event will be delegated to.
     * @returns {module:ui/button/buttonview~ButtonView} The button view instance.
     */
  }, {
    key: "_createButton",
    value: function _createButton(label, icon, eventName) {
      var button = new ckeditor5_ui_src/* ButtonView */.r5(this.locale);
      button.set({
        label,
        icon,
        tooltip: true
      });
      button.delegate("execute").to(this, eventName);
      return button;
    }

    /**
     * Creates a trigger id preview label.
     *
     * @private
     * @returns {module:ui/label/labelview~LabelView} The label view instance.
     */
  }, {
    key: "_createPreviewLabel",
    value: function _createPreviewLabel() {
      var label = new ckeditor5_ui_src/* LabelView */.Dn(this.locale);
      var t = this.t;
      label.extendTemplate({
        attributes: {
          class: ["ck", "ck-behaviortrigger-actions__preview"]
        }
      });
      label.bind("text").to(this, "id", function (id) {
        return id || t("This trigger has no ID");
      });
      return label;
    }
  }]);
  return BehaviorTriggerActionsView;
}(ckeditor5_ui_src/* View */.G7);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/theme/icons/addbehaviortrigger.svg
/* harmony default export */ var addbehaviortrigger = ("<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 22 22\">\n  <path d=\"m15.34 1.768-4.506 7.721 5.661.797v.329L6.687 20.26l-.028-.029 4.641-8.105-5.795-.852v-.329l9.782-9.205z\"/>\n</svg>\n");
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/behaviortriggerui.js















function behaviortriggerui_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }









var VISUAL_SELECTION_MARKER_NAME = "behaviortrigger-ui";

/**
 * The behavior trigger UI plugin. It introduces the `'addbehaviortrigger'` and `'removebehaviortrigger'` buttons and support for the <kbd>Ctrl+T</kbd> keystroke.
 *
 * It uses the
 * {@link module:ui/panel/balloon/contextualballoon~ContextualBalloon contextual balloon plugin}.
 *
 * @extends module:core/plugin~Plugin
 */
var BehaviorTriggerUI = /*#__PURE__*/function (_Plugin) {
  (0,inherits/* default */.Z)(BehaviorTriggerUI, _Plugin);
  function BehaviorTriggerUI() {
    (0,classCallCheck/* default */.Z)(this, BehaviorTriggerUI);
    return behaviortriggerui_callSuper(this, BehaviorTriggerUI, arguments);
  }
  (0,createClass/* default */.Z)(BehaviorTriggerUI, [{
    key: "init",
    value:
    /**
     * @inheritDoc
     */
    function init() {
      var editor = this.editor;
      editor.editing.view.addObserver(ckeditor5_engine_src/* ClickObserver */.KU);

      /**
       * The actions view displayed inside of the balloon.
       *
       * @member {module:link/ui/BehaviorTriggerActionsView~BehaviorTriggerActionsView}
       */
      this.actionsView = this._createActionsView();

      /**
       * The form view displayed inside the balloon.
       *
       * @member {module:link/ui/BehaviorTriggerFormView~BehaviorTriggerFormView}
       */
      this.formView = this._createFormView();

      /**
       * The contextual balloon plugin instance.
       *
       * @private
       * @member {module:ui/panel/balloon/contextualballoon~ContextualBalloon}
       */
      this._balloon = editor.plugins.get(ckeditor5_ui_src/* ContextualBalloon */.WB);

      // Create toolbar buttons.
      this._createToolbarAddButton();

      // Attach lifecycle actions to the the balloon.
      this._enableUserBalloonInteractions();

      // Renders a fake visual selection marker on an expanded selection.
      editor.conversion.for("editingDowncast").markerToHighlight({
        model: VISUAL_SELECTION_MARKER_NAME,
        view: {
          classes: ["ck-fake-behaviortrigger-selection"]
        }
      });

      // Renders a fake visual selection marker on a collapsed selection.
      editor.conversion.for("editingDowncast").markerToElement({
        model: VISUAL_SELECTION_MARKER_NAME,
        view: {
          name: "span",
          classes: ["ck-fake-behaviortrigger-selection", "ck-fake-behaviortrigger-selection_collapsed"]
        }
      });
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(BehaviorTriggerUI.prototype), "destroy", this).call(this);

      // Destroy created UI components as they are not automatically destroyed (see ckeditor5#1341).
      this.formView.destroy();
    }

    /**
     * Creates the {@link module:link/ui/BehaviorTriggerActionsView~BehaviorTriggerActionsView} instance.
     *
     * @private
     * @returns {module:link/ui/BehaviorTriggerActionsView~BehaviorTriggerActionsView} The link actions view instance.
     */
  }, {
    key: "_createActionsView",
    value: function _createActionsView() {
      var _this = this;
      var editor = this.editor;
      var actionsView = new BehaviorTriggerActionsView(editor.locale);
      var addBehaviorTriggerCommand = editor.commands.get("addBehaviorTrigger");
      var removeBehaviorTriggerCommand = editor.commands.get("removeBehaviorTrigger");
      actionsView.bind("id").to(addBehaviorTriggerCommand, "value");
      actionsView.editButtonView.bind("isEnabled").to(addBehaviorTriggerCommand);
      actionsView.removeTriggerButtonView.bind("isEnabled").to(removeBehaviorTriggerCommand);

      // Execute removeBehaviorTrigger command after clicking on the "Edit" button.
      this.listenTo(actionsView, "edit", function () {
        _this._addFormView();
      });

      // Execute removeBehaviorTrigger command after clicking on the "Remove" button.
      this.listenTo(actionsView, "removeBehaviorTrigger", function () {
        editor.execute("removeBehaviorTrigger");
        _this._hideUI();
      });

      // Close the panel on esc key press when the **actions have focus**.
      actionsView.keystrokes.set("Esc", function (data, cancel) {
        _this._hideUI();
        cancel();
      });

      // Open the form view on Ctrl+K when the **actions have focus**..
      actionsView.keystrokes.set(TRIGGER_KEYSTROKE, function (data, cancel) {
        _this._addFormView();
        cancel();
      });
      return actionsView;
    }

    /**
     * Creates the {@link module:link/ui/BehaviorTriggerFormView~BehaviorTriggerFormView} instance.
     *
     * @private
     * @returns {module:link/ui/BehaviorTriggerFormView~BehaviorTriggerFormView} The link form view instance.
     */
  }, {
    key: "_createFormView",
    value: function _createFormView() {
      var _this2 = this;
      var editor = this.editor;
      var addBehaviorTriggerCommand = editor.commands.get("addBehaviorTrigger");
      var formView = new ((0,ckeditor5_ui_src/* CssTransitionDisablerMixin */.RX)(BehaviorTriggerFormView))(editor.locale, addBehaviorTriggerCommand);
      formView.idInputView.fieldView.bind("value").to(addBehaviorTriggerCommand, "value");

      // Form elements should be read-only when corresponding commands are disabled.
      formView.idInputView.bind("isReadOnly").to(addBehaviorTriggerCommand, "isEnabled", function (value) {
        return !value;
      });
      formView.saveButtonView.bind("isEnabled").to(addBehaviorTriggerCommand);

      // Execute link command after clicking the "Save" button.
      this.listenTo(formView, "submit", function () {
        var value = formView.idInputView.fieldView.element.value;
        editor.execute("addBehaviorTrigger", value, formView.getDecoratorSwitchesState());
        _this2._closeFormView();
      });

      // Hide the panel after clicking the "Cancel" button.
      this.listenTo(formView, "cancel", function () {
        _this2._closeFormView();
      });

      // Close the panel on esc key press when the **form has focus**.
      formView.keystrokes.set("Esc", function (data, cancel) {
        _this2._closeFormView();
        cancel();
      });
      return formView;
    }

    /**
     * Creates a toolbar Link button. Clicking this button will show
     * a {@link #_balloon} attached to the selection.
     *
     * @private
     */
  }, {
    key: "_createToolbarAddButton",
    value: function _createToolbarAddButton() {
      var _this3 = this;
      var editor = this.editor;
      var addBehaviorTriggerCommand = editor.commands.get("addBehaviorTrigger");
      var t = editor.t;

      // Handle the `Ctrl+K` keystroke and show the panel.
      editor.keystrokes.set(TRIGGER_KEYSTROKE, function (keyEvtData, cancel) {
        // Prevent focusing the search bar in FF, Chrome and Edge. See https://github.com/ckeditor/ckeditor5/issues/4811.
        cancel();
        if (addBehaviorTriggerCommand.isEnabled) {
          _this3._showUI(true);
        }
      });
      editor.ui.componentFactory.add("addBehaviorTrigger", function (locale) {
        var button = new ckeditor5_ui_src/* ButtonView */.r5(locale);
        button.label = t("Behavior");
        button.icon = addbehaviortrigger;
        button.keystroke = TRIGGER_KEYSTROKE;
        button.tooltip = true;
        button.withText = true;
        button.isToggleable = true;

        // Bind button to the command.
        button.bind("isEnabled").to(addBehaviorTriggerCommand, "isEnabled");
        button.bind("isOn").to(addBehaviorTriggerCommand, "value", function (value) {
          return !!value;
        });

        // Show the panel on button click.
        _this3.listenTo(button, "execute", function () {
          return _this3._showUI(true);
        });
        return button;
      });
    }

    /**
     * Attaches actions that control whether the balloon panel containing the
     * {@link #formView} is visible or not.
     *
     * @private
     */
  }, {
    key: "_enableUserBalloonInteractions",
    value: function _enableUserBalloonInteractions() {
      var _this4 = this;
      var viewDocument = this.editor.editing.view.document;

      // Handle click on view document and show panel when selection is placed inside the link element.
      // Keep panel open until selection will be inside the same link element.
      this.listenTo(viewDocument, "click", function () {
        var parentLink = _this4._getSelectedLinkElement();
        if (parentLink) {
          // Then show panel but keep focus inside editor editable.
          _this4._showUI();
        }
      });

      // Focus the form if the balloon is visible and the Tab key has been pressed.
      this.editor.keystrokes.set("Tab", function (data, cancel) {
        if (_this4._areActionsVisible && !_this4.actionsView.focusTracker.isFocused) {
          _this4.actionsView.focus();
          cancel();
        }
      }, {
        // Use the high priority because the link UI navigation is more important
        // than other feature's actions, e.g. list indentation.
        // https://github.com/ckeditor/ckeditor5-link/issues/146
        priority: "high"
      });

      // Close the panel on the Esc key press when the editable has focus and the balloon is visible.
      this.editor.keystrokes.set("Esc", function (data, cancel) {
        if (_this4._isUIVisible) {
          _this4._hideUI();
          cancel();
        }
      });

      // Close on click outside of balloon panel element.
      (0,ckeditor5_ui_src/* clickOutsideHandler */.eC)({
        emitter: this.formView,
        activator: function activator() {
          return _this4._isUIInPanel;
        },
        contextElements: [this._balloon.view.element],
        callback: function callback() {
          return _this4._hideUI();
        }
      });
    }

    /**
     * Adds the {@link #actionsView} to the {@link #_balloon}.
     *
     * @protected
     */
  }, {
    key: "_addActionsView",
    value: function _addActionsView() {
      if (this._areActionsInPanel) {
        return;
      }
      this._balloon.add({
        view: this.actionsView,
        position: this._getBalloonPositionData()
      });
    }

    /**
     * Adds the {@link #formView} to the {@link #_balloon}.
     *
     * @protected
     */
  }, {
    key: "_addFormView",
    value: function _addFormView() {
      if (this._isFormInPanel) {
        return;
      }
      var editor = this.editor;
      var addBehaviorTriggerCommand = editor.commands.get("addBehaviorTrigger");
      var selection = editor.model.document.selection;
      this.formView.disableCssTransitions();
      this._balloon.add({
        view: this.formView,
        position: this._getBalloonPositionData()
      });

      // Select input when form view is currently visible.
      if (this._balloon.visibleView === this.formView) {
        this.formView.idInputView.fieldView.select();
      }
      this.formView.enableCssTransitions();

      // Make sure that each time the panel shows up, the URL field remains in sync with the value of
      // the command. If the user typed in the input, then canceled the balloon (`idInputView.fieldView#value` stays
      // unaltered) and re-opened it without changing the value of the link command (e.g. because they
      // clicked the same link), they would see the old value instead of the actual value of the command.
      // https://github.com/ckeditor/ckeditor5-link/issues/78
      // https://github.com/ckeditor/ckeditor5-link/issues/123
      this.formView.idInputView.fieldView.element.value = addBehaviorTriggerCommand.value || this._generateIdFromSelection(selection);
    }

    /**
     * Closes the form view. Decides whether the balloon should be hidden completely or if the action view should be shown. This is
     * decided upon the link command value (which has a value if the document selection is in the link).
     *
     * Additionally, if any {@link module:link/link~LinkConfig#decorators} are defined in the editor configuration, the state of
     * switch buttons responsible for manual decorator handling is restored.
     *
     * @private
     */
  }, {
    key: "_closeFormView",
    value: function _closeFormView() {
      var addBehaviorTriggerCommand = this.editor.commands.get("addBehaviorTrigger");

      // Restore manual decorator states to represent the current model state. This case is important to reset the switch buttons
      // when the user cancels the editing form.
      addBehaviorTriggerCommand.restoreManualDecoratorStates();
      if (addBehaviorTriggerCommand.value !== undefined) {
        this._removeFormView();
      } else {
        this._hideUI();
      }
    }

    /**
     * Removes the {@link #formView} from the {@link #_balloon}.
     *
     * @protected
     */
  }, {
    key: "_removeFormView",
    value: function _removeFormView() {
      if (this._isFormInPanel) {
        // Blur the input element before removing it from DOM to prevent issues in some browsers.
        // See https://github.com/ckeditor/ckeditor5/issues/1501.
        this.formView.saveButtonView.focus();
        this._balloon.remove(this.formView);

        // Because the form has an input which has focus, the focus must be brought back
        // to the editor. Otherwise, it would be lost.
        this.editor.editing.view.focus();
        this._hideFakeVisualSelection();
      }
    }

    /**
     * Shows the correct UI type. It is either {@link #formView} or {@link #actionsView}.
     *
     * @param {Boolean} forceVisible
     * @private
     */
  }, {
    key: "_showUI",
    value: function _showUI() {
      var forceVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // When there's no link under the selection, go straight to the editing UI.
      if (!this._getSelectedLinkElement()) {
        // Show visual selection on a text without a link when the contextual balloon is displayed.
        // See https://github.com/ckeditor/ckeditor5/issues/4721.
        this._showFakeVisualSelection();
        this._addActionsView();

        // Be sure panel with link is visible.
        if (forceVisible) {
          this._balloon.showStack("main");
        }
        this._addFormView();
      }
      // If there's a link under the selection...
      else {
        // Go to the editing UI if actions are already visible.
        if (this._areActionsVisible) {
          this._addFormView();
        }
        // Otherwise display just the actions UI.
        else {
          this._addActionsView();
        }

        // Be sure panel with link is visible.
        if (forceVisible) {
          this._balloon.showStack("main");
        }
      }

      // Begin responding to ui#update once the UI is added.
      this._startUpdatingUI();
    }

    /**
     * Removes the {@link #formView} from the {@link #_balloon}.
     *
     * See {@link #_addFormView}, {@link #_addActionsView}.
     *
     * @protected
     */
  }, {
    key: "_hideUI",
    value: function _hideUI() {
      if (!this._isUIInPanel) {
        return;
      }
      var editor = this.editor;
      this.stopListening(editor.ui, "update");
      this.stopListening(this._balloon, "change:visibleView");

      // Make sure the focus always gets back to the editable _before_ removing the focused form view.
      // Doing otherwise causes issues in some browsers. See https://github.com/ckeditor/ckeditor5-link/issues/193.
      editor.editing.view.focus();

      // Remove form first because it's on top of the stack.
      this._removeFormView();

      // Then remove the actions view because it's beneath the form.
      this._balloon.remove(this.actionsView);
      this._hideFakeVisualSelection();
    }

    /**
     * Makes the UI react to the {@link module:core/editor/editorui~EditorUI#event:update} event to
     * reposition itself when the editor UI should be refreshed.
     *
     * See: {@link #_hideUI} to learn when the UI stops reacting to the `update` event.
     *
     * @protected
     */
  }, {
    key: "_startUpdatingUI",
    value: function _startUpdatingUI() {
      var _this5 = this;
      var editor = this.editor;
      var viewDocument = editor.editing.view.document;
      var prevSelectedLink = this._getSelectedLinkElement();
      var prevSelectionParent = getSelectionParent();
      var update = function update() {
        var selectedLink = _this5._getSelectedLinkElement();
        var selectionParent = getSelectionParent();

        // Hide the panel if:
        //
        // * the selection went out of the EXISTING link element. E.g. user moved the caret out
        //   of the link,
        // * the selection went to a different parent when creating a NEW link. E.g. someone
        //   else modified the document.
        // * the selection has expanded (e.g. displaying link actions then pressing SHIFT+Right arrow).
        //
        // Note: #_getSelectedLinkElement will return a link for a non-collapsed selection only
        // when fully selected.
        if (prevSelectedLink && !selectedLink || !prevSelectedLink && selectionParent !== prevSelectionParent) {
          _this5._hideUI();
        }
        // Update the position of the panel when:
        //  * link panel is in the visible stack
        //  * the selection remains in the original link element,
        //  * there was no link element in the first place, i.e. creating a new link
        else if (_this5._isUIVisible) {
          // If still in a link element, simply update the position of the balloon.
          // If there was no link (e.g. inserting one), the balloon must be moved
          // to the new position in the editing view (a new native DOM range).
          _this5._balloon.updatePosition(_this5._getBalloonPositionData());
        }
        prevSelectedLink = selectedLink;
        prevSelectionParent = selectionParent;
      };
      function getSelectionParent() {
        return viewDocument.selection.focus.getAncestors().reverse().find(function (node) {
          return node.is("element");
        });
      }
      this.listenTo(editor.ui, "update", update);
      this.listenTo(this._balloon, "change:visibleView", update);
    }

    /**
     * Returns `true` when {@link #formView} is in the {@link #_balloon}.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */
  }, {
    key: "_isFormInPanel",
    get: function get() {
      return this._balloon.hasView(this.formView);
    }

    /**
     * Returns `true` when {@link #actionsView} is in the {@link #_balloon}.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */
  }, {
    key: "_areActionsInPanel",
    get: function get() {
      return this._balloon.hasView(this.actionsView);
    }

    /**
     * Returns `true` when {@link #actionsView} is in the {@link #_balloon} and it is
     * currently visible.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */
  }, {
    key: "_areActionsVisible",
    get: function get() {
      return this._balloon.visibleView === this.actionsView;
    }

    /**
     * Returns `true` when {@link #actionsView} or {@link #formView} is in the {@link #_balloon}.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */
  }, {
    key: "_isUIInPanel",
    get: function get() {
      return this._isFormInPanel || this._areActionsInPanel;
    }

    /**
     * Returns `true` when {@link #actionsView} or {@link #formView} is in the {@link #_balloon} and it is
     * currently visible.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */
  }, {
    key: "_isUIVisible",
    get: function get() {
      var visibleView = this._balloon.visibleView;
      return visibleView == this.formView || this._areActionsVisible;
    }

    /**
     * Returns positioning options for the {@link #_balloon}. They control the way the balloon is attached
     * to the target element or selection.
     *
     * If the selection is collapsed and inside a link element, the panel will be attached to the
     * entire link element. Otherwise, it will be attached to the selection.
     *
     * @private
     * @returns {module:utils/dom/position~Options}
     */
  }, {
    key: "_getBalloonPositionData",
    value: function _getBalloonPositionData() {
      var _this6 = this;
      var view = this.editor.editing.view;
      var model = this.editor.model;
      var viewDocument = view.document;
      var target = null;
      if (model.markers.has(VISUAL_SELECTION_MARKER_NAME)) {
        // There are cases when we highlight selection using a marker (#7705, #4721).
        var markerViewElements = Array.from(this.editor.editing.mapper.markerNameToElements(VISUAL_SELECTION_MARKER_NAME));
        var newRange = view.createRange(view.createPositionBefore(markerViewElements[0]), view.createPositionAfter(markerViewElements[markerViewElements.length - 1]));
        target = view.domConverter.viewRangeToDom(newRange);
      } else {
        // Make sure the target is calculated on demand at the last moment because a cached DOM range
        // (which is very fragile) can desynchronize with the state of the editing view if there was
        // any rendering done in the meantime. This can happen, for instance, when an inline widget
        // gets unlinked.
        target = function target() {
          var targetLink = _this6._getSelectedLinkElement();
          return targetLink ?
          // When selection is inside link element, then attach panel to this element.
          view.domConverter.mapViewToDom(targetLink) :
          // Otherwise attach panel to the selection.
          view.domConverter.viewRangeToDom(viewDocument.selection.getFirstRange());
        };
      }
      return {
        target
      };
    }

    /**
     * Returns the link {@link module:engine/view/attributeelement~AttributeElement} under
     * the {@link module:engine/view/document~Document editing view's} selection or `null`
     * if there is none.
     *
     * **Note**: For a non–collapsed selection, the link element is returned when **fully**
     * selected and the **only** element within the selection boundaries, or when
     * a linked widget is selected.
     *
     * @private
     * @returns {module:engine/view/attributeelement~AttributeElement|null}
     */
  }, {
    key: "_getSelectedLinkElement",
    value: function _getSelectedLinkElement() {
      var view = this.editor.editing.view;
      var selection = view.document.selection;
      var selectedElement = selection.getSelectedElement();

      // The selection is collapsed or some widget is selected (especially inline widget).
      if (selection.isCollapsed || selectedElement && (0,ckeditor5_widget_src/* isWidget */.Qd)(selectedElement)) {
        return findLinkElementAncestor(selection.getFirstPosition());
      } else {
        // The range for fully selected link is usually anchored in adjacent text nodes.
        // Trim it to get closer to the actual link element.
        var range = selection.getFirstRange().getTrimmed();
        var startLink = findLinkElementAncestor(range.start);
        var endLink = findLinkElementAncestor(range.end);
        if (!startLink || startLink != endLink) {
          return null;
        }

        // Check if the link element is fully selected.
        if (view.createRangeIn(startLink).getTrimmed().isEqual(range)) {
          return startLink;
        } else {
          return null;
        }
      }
    }

    /**
     * Displays a fake visual selection when the contextual balloon is displayed.
     *
     * This adds a 'link-ui' marker into the document that is rendered as a highlight on selected text fragment.
     *
     * @private
     */
  }, {
    key: "_showFakeVisualSelection",
    value: function _showFakeVisualSelection() {
      var model = this.editor.model;
      model.change(function (writer) {
        var range = model.document.selection.getFirstRange();
        if (model.markers.has(VISUAL_SELECTION_MARKER_NAME)) {
          writer.updateMarker(VISUAL_SELECTION_MARKER_NAME, {
            range
          });
        } else {
          if (range.start.isAtEnd) {
            var startPosition = range.start.getLastMatchingPosition(function (_ref) {
              var item = _ref.item;
              return !model.schema.isContent(item);
            }, {
              boundaries: range
            });
            writer.addMarker(VISUAL_SELECTION_MARKER_NAME, {
              usingOperation: false,
              affectsData: false,
              range: writer.createRange(startPosition, range.end)
            });
          } else {
            writer.addMarker(VISUAL_SELECTION_MARKER_NAME, {
              usingOperation: false,
              affectsData: false,
              range
            });
          }
        }
      });
    }

    /**
     * Hides the fake visual selection created in {@link #_showFakeVisualSelection}.
     *
     * @private
     */
  }, {
    key: "_hideFakeVisualSelection",
    value: function _hideFakeVisualSelection() {
      var model = this.editor.model;
      if (model.markers.has(VISUAL_SELECTION_MARKER_NAME)) {
        model.change(function (writer) {
          writer.removeMarker(VISUAL_SELECTION_MARKER_NAME);
        });
      }
    }
  }, {
    key: "_generateIdFromSelection",
    value: function _generateIdFromSelection(selection) {
      var id = "";

      // Get selection as plain text.
      var _iterator = (0,createForOfIteratorHelper/* default */.Z)(selection.getRanges()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var range = _step.value;
          var _iterator2 = (0,createForOfIteratorHelper/* default */.Z)(range.getItems()),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              id += (0,viewtoplaintext/* default */.Z)(item);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        // Remove special characters.
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      id = id.replace(/[«»!"#$%&'()*+,/:;<=>?@[\\\]^`{|}~]/g, "");

      // Truncate to 10 characters.
      id = id.substring(0, 20);

      // Strip whitespaces from beginning and end.
      id = id.trim();

      // Transform to lowercase.
      id = id.toLowerCase();

      // Replace dots and spaces with a short dash.
      id = id.replace(/(\s|\.)/g, "-");

      // Replace multiple dashes with a single dash.
      id = id.replace(/-{2,}/g, "-");

      // Replace long dash with two short dashes.
      id = id.replace(/—/g, "--");
      return id;
    }
  }], [{
    key: "requires",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return [ckeditor5_ui_src/* ContextualBalloon */.WB];
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "pluginName",
    get: function get() {
      return "BehaviorTriggerUI";
    }
  }]);
  return BehaviorTriggerUI;
}(ckeditor5_core_src/* Plugin */.Sy); // Returns a link element if there's one among the ancestors of the provided `Position`.
//
// @private
// @param {module:engine/view/position~Position} View position to analyze.
// @returns {module:engine/view/attributeelement~AttributeElement|null} Link element at the position or null.

function findLinkElementAncestor(position) {
  return position.getAncestors().find(function (ancestor) {
    return isLinkElement(ancestor);
  });
}
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/behaviortrigger.js









function behaviortrigger_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }



var BehaviorTrigger = /*#__PURE__*/function (_Plugin) {
  (0,inherits/* default */.Z)(BehaviorTrigger, _Plugin);
  function BehaviorTrigger() {
    (0,classCallCheck/* default */.Z)(this, BehaviorTrigger);
    return behaviortrigger_callSuper(this, BehaviorTrigger, arguments);
  }
  (0,createClass/* default */.Z)(BehaviorTrigger, null, [{
    key: "requires",
    get: function get() {
      return [BehaviorTriggerEditing, BehaviorTriggerUI];
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "pluginName",
    get: function get() {
      return "BehaviorTrigger";
    }
  }]);
  return BehaviorTrigger;
}(ckeditor5_core_src/* Plugin */.Sy);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-behaviortrigger/src/index.js



// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(29671);
// EXTERNAL MODULE: ./packages/core/services/module-manager/index.js
var module_manager = __webpack_require__(94258);
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/linkcommand.js









function linkcommand_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }



var CustomLinkCommand = /*#__PURE__*/function (_LinkCommand) {
  (0,inherits/* default */.Z)(CustomLinkCommand, _LinkCommand);
  /**
   * @inheritDoc
   */
  function CustomLinkCommand(editor) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, CustomLinkCommand);
    _this = linkcommand_callSuper(this, CustomLinkCommand, [editor]);

    /**
     * The type of link.
     *
     * @observable
     * @readonly
     * @member #type
     */
    _this.set("type", null);

    /**
     * The link parameters.
     *
     * @observable
     * @readonly
     * @member #params
     */
    _this.set("params", {});
    _this.on("change:value", function (evt, name, value) {
      _this.type = "url";
      _this.params = {};
      if (value) {
        var _useModule = (0,module_manager/* useModule */.b7)("app_components"),
          getLinkActions = _useModule.getLinkActions;
        var actions = getLinkActions(value);
        if (actions && actions.length > 0) {
          var action = actions[0];
          _this.params = (0,lodash.omit)(action, ["type"]);
          switch (action.type) {
            case "page":
              _this.type = action.type;
              _this.params.index++;
              break;
            case "showBlock":
              _this.type = "toggle";
              _this.params.action = "show";
              break;
            case "hideBlock":
              _this.type = "toggle";
              _this.params.action = "hide";
              break;
            case "toggleBlock":
              _this.type = "toggle";
              _this.params.action = "toggle";
              break;
            case "enterFullscreen":
              _this.type = "fullscreen";
              _this.params.action = "enter";
              break;
            case "exitFullscreen":
              _this.type = "fullscreen";
              _this.params.action = "exit";
              break;
            case "toggleFullscreen":
              _this.type = "fullscreen";
              _this.params.action = "toggle";
              break;
            default:
              _this.type = action.type;
          }
        }
      }
    });
    return _this;
  }
  return (0,createClass/* default */.Z)(CustomLinkCommand);
}(ckeditor5_link_src/* LinkCommand */.xy);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/linkediting.js










function linkediting_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }


var CustomLinkEditing = /*#__PURE__*/function (_LinkEditing) {
  (0,inherits/* default */.Z)(CustomLinkEditing, _LinkEditing);
  function CustomLinkEditing() {
    (0,classCallCheck/* default */.Z)(this, CustomLinkEditing);
    return linkediting_callSuper(this, CustomLinkEditing, arguments);
  }
  (0,createClass/* default */.Z)(CustomLinkEditing, [{
    key: "init",
    value:
    /**
     * @inheritDoc
     */
    function init() {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(CustomLinkEditing.prototype), "init", this).call(this);
      var editor = this.editor;
      editor.commands.add("link", new CustomLinkCommand(editor));
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "CustomLinkEditing";
    }
  }]);
  return CustomLinkEditing;
}(ckeditor5_link_src/* LinkEditing */.Wz);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/autolink.js









function autolink_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }


var CustomAutoLink = /*#__PURE__*/function (_AutoLink) {
  (0,inherits/* default */.Z)(CustomAutoLink, _AutoLink);
  function CustomAutoLink() {
    (0,classCallCheck/* default */.Z)(this, CustomAutoLink);
    return autolink_callSuper(this, CustomAutoLink, arguments);
  }
  (0,createClass/* default */.Z)(CustomAutoLink, null, [{
    key: "requires",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return ["Delete", CustomLinkEditing];
    }
  }, {
    key: "pluginName",
    get: function get() {
      return "CustomAutoLink";
    }
  }]);
  return CustomAutoLink;
}(ckeditor5_link_src/* AutoLink */.EX);

// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-link/src/utils.js
var utils = __webpack_require__(59821);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(26154);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(85415);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(86466);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-link/src/ui/linkformview.js
var linkformview = __webpack_require__(4405);
// EXTERNAL MODULE: ./node_modules/timecode-input/index.js
var timecode_input = __webpack_require__(37438);
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/ui/inputtimecodeview.js









function inputtimecodeview_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }




/**
 * The timecode input view class.
 */
var InputTimecodeView = /*#__PURE__*/function (_InputView) {
  (0,inherits/* default */.Z)(InputTimecodeView, _InputView);
  /**
   * Creates an instance of the input view.
   *
   * @param {module:utils/locale~Locale} locale The {@link module:core/editor/editor~Editor#locale} instance.
   * @param {Object} [options] The options of the input.
   * @param {Number} [options.min] The value of the `min` DOM attribute (the lowest accepted value).
   * @param {Number} [options.max] The value of the `max` DOM attribute (the highest accepted value).
   */
  function InputTimecodeView(locale) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      min = _ref.min,
      max = _ref.max;
    (0,classCallCheck/* default */.Z)(this, InputTimecodeView);
    _this = inputtimecodeview_callSuper(this, InputTimecodeView, [locale]);
    var bind = _this.bindTemplate;

    /**
     * The value of the `min` DOM attribute (the lowest accepted value) set on the {@link #element}.
     *
     * @observable
     * @default undefined
     * @member {Number} #min
     */
    _this.set("min", min);

    /**
     * The value of the `max` DOM attribute (the highest accepted value) set on the {@link #element}.
     *
     * @observable
     * @default undefined
     * @member {Number} #max
     */
    _this.set("max", max);
    _this.inputMode = null;

    // extendTemplate doesn't allow changing the tag.
    _this.template.tag = "timecode-input";
    _this.extendTemplate({
      attributes: {
        class: ["ck-input-timecode"],
        min: bind.to("min"),
        max: bind.to("max")
      }
    });
    return _this;
  }

  /**
   * @inheritdoc
   */
  (0,createClass/* default */.Z)(InputTimecodeView, [{
    key: "_updateIsEmpty",
    value: function _updateIsEmpty() {
      this.isEmpty = this.element.value === null;
    }
  }]);
  return InputTimecodeView;
}(ckeditor5_ui_src/* InputView */.Em);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/ui/utils.js








function createLabeledInputTimecode(labeledFieldView, viewUid, statusUid) {
  var inputView = new InputTimecodeView(labeledFieldView.locale);
  inputView.set({
    id: viewUid,
    ariaDescribedById: statusUid
  });
  inputView.bind("isReadOnly").to(labeledFieldView, "isEnabled", function (value) {
    return !value;
  });
  inputView.bind("hasError").to(labeledFieldView, "errorText", function (value) {
    return !!value;
  });
  inputView.on("input", function () {
    // UX: Make the error text disappear and disable the error indicator as the user
    // starts fixing the errors.
    labeledFieldView.errorText = null;
  });
  labeledFieldView.bind("isEmpty", "isFocused", "placeholder").to(inputView);
  return inputView;
}
function getTypeLabels(t) {
  return {
    play: t("Play"),
    pause: t("Pause"),
    stop: t("Stop"),
    seek: t("Seek"),
    page: t("Page"),
    toggle: t("Show/hide a block"),
    scenario: t("Scenario"),
    fullscreen: t("Fullscreen"),
    url: t("URL")
  };
}
function getComponentLabels(type) {
  var _useModule = (0,module_manager/* useModule */.b7)("app_components"),
    getComponentsByType = _useModule.getComponentsByType;
  var labels = {};
  getComponentsByType(type).forEach(function (c) {
    labels[c.id] = c.name;
  });
  return labels;
}
function getToggleActionLabels(t) {
  return {
    show: t("Show"),
    hide: t("Hide"),
    toggle: t("Toggle")
  };
}
function getFullscreenActionLabels(t) {
  return {
    enter: t("Enter"),
    exit: t("Exit"),
    toggle: t("Toggle")
  };
}
function getDropdownDefinitions(labels) {
  var itemDefinitions = new ckeditor5_utils_src/* Collection */.FE();
  Object.entries(labels).forEach(function (_ref) {
    var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
      key = _ref2[0],
      label = _ref2[1];
    var definition = {
      type: "button",
      model: new ckeditor5_ui_src/* ViewModel */.jz({
        _value: key,
        label: label,
        withText: true
      })
    };
    itemDefinitions.add(definition);
  });
  return itemDefinitions;
}
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/ui/formgroupview.js










function formgroupview_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }


var FormGroupView = /*#__PURE__*/function (_View) {
  (0,inherits/* default */.Z)(FormGroupView, _View);
  /**
   * Creates an instance of the form group class.
   *
   * @param {module:utils/locale~Locale} locale The locale instance.
   * @param {Object} options
   * @param {Array.<module:ui/view~View>} options.children
   * @param {String} [options.class]
   * DOM attributes and gets described by the label.
   */
  function FormGroupView(locale) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.Z)(this, FormGroupView);
    _this = formgroupview_callSuper(this, FormGroupView, [locale]);
    var bind = _this.bindTemplate;

    /**
     * Controls whether the groupis visible. Visible by default, groups are hidden
     * using a CSS class.
     *
     * @observable
     * @default true
     * @member {Boolean} #isVisible
     */
    _this.set("isVisible", true);

    /**
     * An additional CSS class added to the {@link #element}.
     *
     * @observable
     * @member {String} #class
     */
    _this.set("class", options.class || null);

    /**
     * A collection of row items (buttons, dropdowns, etc.).
     *
     * @readonly
     * @member {module:ui/viewcollection~ViewCollection}
     */
    _this.children = _this.createCollection();
    if (options.children) {
      options.children.forEach(function (child) {
        return _this.children.add(child);
      });
    }

    /**
     * The role property reflected by the `role` DOM attribute of the {@link #element}.
     *
     * **Note**: Used only when a `labelView` is passed to constructor `options`.
     *
     * @private
     * @observable
     * @member {String} #role
     */
    _this.set("_role", null);
    _this.setTemplate({
      tag: "div",
      attributes: {
        class: ["ck", "ck-form__group", bind.to("class"), bind.if("isVisible", "ck-hidden", function (value) {
          return !value;
        })],
        role: bind.to("_role"),
        "z-index": "-1"
      },
      children: _this.children
    });
    return _this;
  }
  return (0,createClass/* default */.Z)(FormGroupView);
}(ckeditor5_ui_src/* View */.G7);

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(89857);
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/theme/icons/clear.svg
/* harmony default export */ var clear = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n  <path fill=\"currentColor\" d=\"M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z\"/>\n</svg>\n");
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/theme/icons/in.svg
/* harmony default export */ var icons_in = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n  <path fill=\"currentColor\" d=\"M9.293 13.707l-3-3a.999.999 0 1 1 1.414-1.414L9 10.586V3a1 1 0 1 1 2 0v7.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a.999.999 0 0 1-1.414 0zM17 16a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h14z\"/>\n</svg>\n");
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/theme/icons/out.svg
/* harmony default export */ var out = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n  <path fill=\"currentColor\" d=\"M13.707 6.707a.997.997 0 0 1-1.414 0L11 5.414V13a1 1 0 1 1-2 0V5.414L7.707 6.707a.999.999 0 1 1-1.414-1.414l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 0 1 0 1.414zM17 18H3a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z\"/>\n</svg>\n");
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/ui/labeledtimecodefieldview.js











function labeledtimecodefieldview_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }









/**
 * The labeled timecode field view class.
 */
var LabeledTimecodeFieldView = /*#__PURE__*/function (_LabeledFieldView) {
  (0,inherits/* default */.Z)(LabeledTimecodeFieldView, _LabeledFieldView);
  /**
   * Creates an instance of the labeled field view.
   *
   * @param {module:utils/locale~Locale} locale The {@link module:core/editor/editor~Editor#locale} instance.
   * @param {Object} [options] The options of the input.
   * @param {Boolean} [options.in_button=true] Whether to add the 'in' button.
   * @param {Boolean} [options.out_button=true] Whether to add the 'out' button.
   * @param {Boolean} [options.clear_button=true] Whether to add the 'clear' button.
   */
  function LabeledTimecodeFieldView(locale) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$in_button = _ref.in_button,
      in_button = _ref$in_button === void 0 ? true : _ref$in_button,
      _ref$out_button = _ref.out_button,
      out_button = _ref$out_button === void 0 ? true : _ref$out_button,
      _ref$clear_button = _ref.clear_button,
      clear_button = _ref$clear_button === void 0 ? true : _ref$clear_button;
    (0,classCallCheck/* default */.Z)(this, LabeledTimecodeFieldView);
    _this = labeledtimecodefieldview_callSuper(this, LabeledTimecodeFieldView, [locale, createLabeledInputTimecode]);
    var t = locale.t;
    var _useModule = (0,module_manager/* useModule */.b7)("media_player"),
      mediaTime = _useModule.time,
      seekMediaTo = _useModule.seekTo;
    _this.toolbarView = null;
    var buttons = [];
    if (in_button) {
      _this.inButton = new ckeditor5_ui_src/* ButtonView */.r5(locale);
      _this.inButton.set({
        icon: icons_in,
        tooltip: t("Set value to current media time")
      });
      _this.inButton.on("execute", function () {
        _this.fieldView.value = (0,reactivity_esm_bundler/* unref */.SU)(mediaTime);
        _this.fieldView.fire("input");
      });
      buttons.push(_this.inButton);
    }
    if (out_button) {
      _this.outButton = new ckeditor5_ui_src/* ButtonView */.r5(locale);
      _this.outButton.set({
        icon: out,
        tooltip: t("Set current media time to this value")
      });
      _this.outButton.on("execute", function () {
        seekMediaTo(_this.fieldView.value);
      });
      buttons.push(_this.outButton);
    }
    if (clear_button) {
      _this.clearButton = new ckeditor5_ui_src/* ButtonView */.r5(locale);
      _this.clearButton.set({
        icon: clear,
        tooltip: t("Clear value")
      });
      _this.clearButton.on("execute", function () {
        _this.fieldView.value = null;
        _this.fieldView.fire("input");
      });
      buttons.push(_this.clearButton);
    }
    if (buttons.length > 0) {
      _this.toolbarView = new ckeditor5_ui_src/* ToolbarView */.jB(locale);
      _this.toolbarView.items.addMany(buttons);
      _this.fieldWrapperChildren.add(_this.toolbarView);
    }
    _this.extendTemplate({
      attributes: {
        class: ["ck-labeled-field-view_timecode"]
      }
    });
    return _this;
  }

  /**
   * @inheritdoc
   */
  (0,createClass/* default */.Z)(LabeledTimecodeFieldView, [{
    key: "render",
    value: function render() {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(LabeledTimecodeFieldView.prototype), "render", this).call(this);
      if (this.toolbarView) {
        this.fieldView.focusTracker.add(this.toolbarView.element);
      }
    }
  }]);
  return LabeledTimecodeFieldView;
}(ckeditor5_ui_src/* LabeledFieldView */.KP);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/theme/icons/tip.svg
/* harmony default export */ var tip = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path fill=\"currentColor\" d=\"M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm.896 3.466c.936 0 1.211.543 1.211 1.164 0 .775-.62 1.492-1.679 1.492-.886 0-1.308-.445-1.282-1.182 0-.621.519-1.474 1.75-1.474zM8.498 15.75c-.64 0-1.107-.389-.66-2.094l.733-3.025c.127-.484.148-.678 0-.678-.191 0-1.022.334-1.512.664l-.319-.523c1.555-1.299 3.343-2.061 4.108-2.061.64 0 .746.756.427 1.92l-.84 3.18c-.149.562-.085.756.064.756.192 0 .82-.232 1.438-.719l.362.486c-1.513 1.512-3.162 2.094-3.801 2.094z\"/>\n</svg>");
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/ui/linkformview.js
















function linkformview_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }







var CustomLinkFormView = /*#__PURE__*/function (_LinkFormView) {
  (0,inherits/* default */.Z)(CustomLinkFormView, _LinkFormView);
  /**
   * @inheritDoc
   */
  function CustomLinkFormView(locale, linkCommand) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, CustomLinkFormView);
    _this = linkformview_callSuper(this, CustomLinkFormView, [locale, linkCommand]);
    var t = _this.locale.t;

    /**
     * The link type
     *
     * @observable
     * @member {String} #type
     */
    _this.set("type", null);

    /**
     * A collection of link parameters.
     *
     * @protected
     * @observable
     * @member {Object} #params
     */
    _this.set("params", {});
    _this.on("change:type", function (evt, name, value) {
      _this.urlInputView.fieldView.value = "";

      // Set action defaults.
      switch (value) {
        case "seek":
          _this.params = {
            time: 0
          };
          break;
        case "toggle":
          _this.params = {
            action: "show"
          };
          break;
        case "fullscreen":
          _this.params = {
            action: "enter"
          };
          break;
        default:
          _this.params = {};
      }
    });
    _this.on("change:params", function () {
      _this.updateValue();
    });

    // Add a placeholder to the URL field
    _this.urlInputView.fieldView.placeholder = t("https://example.com");
    return _this;
  }

  /**
   * @inheritDoc
   */
  (0,createClass/* default */.Z)(CustomLinkFormView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(CustomLinkFormView.prototype), "render", this).call(this);
      var extraChildViews = [this.typeInputView, this._playInputsGroup, this._seekInputsGroup, this._pageInputsGroup, this._blockToggleInputsGroup, this._scenarioInputsGroup, this._fullscreenInputsGroup];
      this._focusables.addMany(extraChildViews, 0);
      extraChildViews.forEach(function (v) {
        // Register the view in the focus tracker.
        _this2.focusTracker.add(v.element);
      });
    }

    /**
     * Creates a labeled "type" input.
     *
     * @private
     * @returns {LabeledFieldView} Labeled field view instance.
     */
  }, {
    key: "_createTypeInput",
    value: function _createTypeInput() {
      var _this3 = this;
      var t = this.locale.t;
      var typeLabels = getTypeLabels(this.t);
      var dropdown = new ckeditor5_ui_src/* LabeledFieldView */.KP(this.locale, ckeditor5_ui_src/* createLabeledDropdown */.FH);
      dropdown.set({
        label: t("Type")
      });
      dropdown.fieldView.buttonView.set({
        isOn: false,
        withText: true
      });
      dropdown.fieldView.buttonView.bind("label").to(this, "type", function (value) {
        return typeLabels[value];
      });
      dropdown.fieldView.on("execute", function (evt) {
        _this3.type = evt.source._value;
      });
      dropdown.bind("isEmpty").to(this, "type", function (value) {
        return !value;
      });
      var dropdownDefinitions = getDropdownDefinitions(typeLabels);
      dropdownDefinitions.map(function (definition) {
        definition.model.bind("isOn").to(_this3, "type", function (value) {
          return value === definition.model._value;
        });
      });
      (0,ckeditor5_ui_src/* addListToDropdown */.Pm)(dropdown.fieldView, dropdownDefinitions);
      return dropdown;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "_createUrlInput",
    value: function _createUrlInput() {
      var labeledInput = (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(CustomLinkFormView.prototype), "_createUrlInput", this).call(this);

      // Hide the input when the type is not "url".
      var bind = this.bindTemplate;
      labeledInput.extendTemplate({
        attributes: {
          // ck-hidden seems to cause focus/selection issues.
          // see https://github.com/philharmoniedeparis/metascore-library/issues/704
          class: bind.if("type", "ck-fake-hidden", function (value) {
            return value !== "url";
          })
        }
      });
      return labeledInput;
    }

    /**
     * Creates a group of inputs for "play" links.
     *
     * @private
     * @returns {FormGroupView} Form group view instance.
     */
  }, {
    key: "_createPlayInputs",
    value: function _createPlayInputs() {
      var _this4 = this;
      var locale = this.locale;
      var t = locale.t;
      var bind = this.bindTemplate;

      // Excerpt.
      this.playExcerptInputView = new ckeditor5_ui_src/* SwitchButtonView */.BM(locale);
      this.playExcerptInputView.set({
        label: t("Excerpt"),
        withText: true
      });
      this.playExcerptInputView.bind("isOn").to(this, "params", function (params) {
        return !!(params !== null && params !== void 0 && params.excerpt);
      });
      this.playExcerptInputView.on("execute", function () {
        var _this4$params;
        _this4.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this4.params), {}, {
          excerpt: !((_this4$params = _this4.params) !== null && _this4$params !== void 0 && _this4$params.excerpt)
        });
      });

      // Start time.
      this.playStartInputView = new LabeledTimecodeFieldView(locale);
      this.playStartInputView.set({
        label: t("Start time")
      });
      this.playStartInputView.fieldView.bind("value").to(this, "params", function (params) {
        return params === null || params === void 0 ? void 0 : params.start;
      });
      this.playStartInputView.fieldView.on("input", function () {
        _this4.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this4.params), {}, {
          start: _this4.playStartInputView.fieldView.element.value
        });
      });
      this.playStartInputView.extendTemplate({
        attributes: {
          class: bind.if("params", "ck-hidden", function (value) {
            return !(value !== null && value !== void 0 && value.excerpt);
          })
        }
      });

      // End time.
      this.playEndInputView = new LabeledTimecodeFieldView(locale);
      this.playEndInputView.set({
        label: t("End time")
      });
      this.playEndInputView.fieldView.bind("value").to(this, "params", function (params) {
        return params === null || params === void 0 ? void 0 : params.end;
      });
      this.playEndInputView.fieldView.on("input", function () {
        _this4.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this4.params), {}, {
          end: _this4.playEndInputView.fieldView.element.value
        });
      });
      this.playEndInputView.extendTemplate({
        attributes: {
          class: bind.if("params", "ck-hidden", function (value) {
            return !(value !== null && value !== void 0 && value.excerpt);
          })
        }
      });

      // Scenario.
      var scenarioLabels = getComponentLabels("Scenario");
      this.playScenarioInputView = new ckeditor5_ui_src/* LabeledFieldView */.KP(locale, ckeditor5_ui_src/* createLabeledDropdown */.FH);
      this.playScenarioInputView.set({
        label: t("Scenario")
      });
      this.playScenarioInputView.fieldView.buttonView.set({
        isOn: false,
        withText: true
      });
      this.playScenarioInputView.fieldView.buttonView.bind("label").to(this, "params", function (params) {
        return scenarioLabels[params === null || params === void 0 ? void 0 : params.scenario];
      });
      this.playScenarioInputView.fieldView.on("execute", function (evt) {
        _this4.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this4.params), {}, {
          scenario: evt.source._value
        });
      });
      this.playScenarioInputView.bind("isEmpty").to(this, "params", function (params) {
        return !(params !== null && params !== void 0 && params.scenario);
      });
      this.playScenarioInputView.extendTemplate({
        attributes: {
          class: bind.if("params", "ck-hidden", function (value) {
            return !(value !== null && value !== void 0 && value.excerpt);
          })
        }
      });
      var dropdownDefinitions = getDropdownDefinitions(scenarioLabels);
      dropdownDefinitions.map(function (definition) {
        definition.model.bind("isOn").to(_this4, "params", function (value) {
          return (value === null || value === void 0 ? void 0 : value.scenario) === definition.model._value;
        });
      });
      (0,ckeditor5_ui_src/* addListToDropdown */.Pm)(this.playScenarioInputView.fieldView, dropdownDefinitions);

      // Auto-highlight.
      this.playHighlightInputView = new ckeditor5_ui_src/* SwitchButtonView */.BM(locale);
      this.playHighlightInputView.set({
        label: t("Auto-highlight"),
        withText: true,
        tooltip: t("Highlight the link when the current media time is between its time limits")
      });
      this.playHighlightInputView.bind("isOn").to(this, "params", function (params) {
        return !!(params !== null && params !== void 0 && params.highlight);
      });
      this.playHighlightInputView.on("execute", function () {
        var _this4$params2;
        _this4.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this4.params), {}, {
          highlight: !((_this4$params2 = _this4.params) !== null && _this4$params2 !== void 0 && _this4$params2.highlight)
        });
      });
      this.playHighlightInputView.extendTemplate({
        attributes: {
          class: bind.if("params", "ck-hidden", function (value) {
            return !(value !== null && value !== void 0 && value.excerpt);
          })
        }
      });
      var inputs = new FormGroupView(locale, {
        children: [this.playExcerptInputView, this.playStartInputView, this.playEndInputView, this.playScenarioInputView, this.playHighlightInputView]
      });
      inputs.bind("isVisible").to(this, "type", function (value) {
        return value === "play";
      });
      return inputs;
    }

    /**
     * Creates a group of inputs for "seek" links.
     *
     * @private
     * @returns {FormGroupView} Form group view instance.
     */
  }, {
    key: "_createSeekInputs",
    value: function _createSeekInputs() {
      var _this5 = this;
      var locale = this.locale;
      var t = locale.t;

      // Time.
      this.seekTimeInputView = new LabeledTimecodeFieldView(locale, {
        clear_button: false
      });
      this.seekTimeInputView.set({
        label: t("Time")
      });
      this.seekTimeInputView.fieldView.bind("value").to(this, "params", function (params) {
        return params === null || params === void 0 ? void 0 : params.time;
      });
      this.seekTimeInputView.fieldView.on("input", function () {
        _this5.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this5.params), {}, {
          time: _this5.seekTimeInputView.fieldView.element.value
        });
      });
      var inputs = new FormGroupView(locale, {
        children: [this.seekTimeInputView]
      });
      inputs.bind("isVisible").to(this, "type", function (value) {
        return value === "seek";
      });
      return inputs;
    }

    /**
     * Creates a group of inputs for "page" links.
     *
     * @private
     * @returns {FormGroupView} Form group view instance.
     */
  }, {
    key: "_createPageInputs",
    value: function _createPageInputs() {
      var _this6 = this;
      var locale = this.locale;
      var t = locale.t;

      // Block.
      var blockLabels = Object.fromEntries(Object.values(getComponentLabels("Block")).map(function (val) {
        return [val, val];
      }));
      this.pageBlockInputView = new ckeditor5_ui_src/* LabeledFieldView */.KP(locale, ckeditor5_ui_src/* createLabeledDropdown */.FH);
      this.pageBlockInputView.set({
        label: t("Block")
      });
      this.pageBlockInputView.fieldView.buttonView.set({
        isOn: false,
        withText: true
      });
      this.pageBlockInputView.fieldView.buttonView.bind("label").to(this, "params", function (params) {
        return params === null || params === void 0 ? void 0 : params.block;
      });
      this.pageBlockInputView.fieldView.on("execute", function (evt) {
        _this6.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this6.params), {}, {
          block: evt.source._value
        });
      });
      this.pageBlockInputView.bind("isEmpty").to(this, "params", function (params) {
        return !(params !== null && params !== void 0 && params.block);
      });
      var dropdownDefinitions = getDropdownDefinitions(blockLabels);
      dropdownDefinitions.map(function (definition) {
        definition.model.bind("isOn").to(_this6, "params", function (value) {
          return (value === null || value === void 0 ? void 0 : value.block) === definition.model._value;
        });
      });
      (0,ckeditor5_ui_src/* addListToDropdown */.Pm)(this.pageBlockInputView.fieldView, dropdownDefinitions);

      // Index.
      this.pageIndexInputView = new ckeditor5_ui_src/* LabeledFieldView */.KP(locale, ckeditor5_ui_src/* createLabeledInputNumber */.sh);
      this.pageIndexInputView.set({
        label: t("Page")
      });
      this.pageIndexInputView.fieldView.set({
        min: 1,
        step: 1
      });
      this.pageIndexInputView.fieldView.bind("value").to(this, "params", function (params) {
        return params === null || params === void 0 ? void 0 : params.index;
      });
      this.pageIndexInputView.fieldView.on("input", function () {
        _this6.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this6.params), {}, {
          index: parseInt(_this6.pageIndexInputView.fieldView.element.value)
        });
      });
      var inputs = new FormGroupView(locale, {
        children: [this.pageBlockInputView, this.pageIndexInputView]
      });
      inputs.bind("isVisible").to(this, "type", function (value) {
        return value === "page";
      });
      return inputs;
    }

    /**
     * Creates a group of inputs for "(show|hide|toggle)Block" links.
     *
     * @private
     * @returns {FormGroupView} Form group view instance.
     */
  }, {
    key: "_createBlockToggleInputs",
    value: function _createBlockToggleInputs() {
      var _this7 = this;
      var locale = this.locale;
      var t = locale.t;

      // Block.
      var blockLabels = Object.fromEntries(Object.values(getComponentLabels("Block")).map(function (val) {
        return [val, val];
      }));
      this.toggleBlockInputView = new ckeditor5_ui_src/* LabeledFieldView */.KP(locale, ckeditor5_ui_src/* createLabeledDropdown */.FH);
      this.toggleBlockInputView.set({
        label: t("Block")
      });
      this.toggleBlockInputView.fieldView.buttonView.set({
        isOn: false,
        withText: true
      });
      this.toggleBlockInputView.fieldView.buttonView.bind("label").to(this, "params", function (params) {
        return params === null || params === void 0 ? void 0 : params.name;
      });
      this.toggleBlockInputView.fieldView.on("execute", function (evt) {
        _this7.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this7.params), {}, {
          name: evt.source._value
        });
      });
      this.toggleBlockInputView.bind("isEmpty").to(this, "params", function (params) {
        return !(params !== null && params !== void 0 && params.name);
      });
      var nameDropdownDefinitions = getDropdownDefinitions(blockLabels);
      nameDropdownDefinitions.map(function (definition) {
        definition.model.bind("isOn").to(_this7, "params", function (value) {
          return (value === null || value === void 0 ? void 0 : value.name) === definition.model._value;
        });
      });
      (0,ckeditor5_ui_src/* addListToDropdown */.Pm)(this.toggleBlockInputView.fieldView, nameDropdownDefinitions);

      // Action.
      var actionLabels = getToggleActionLabels(t);
      this.toggleActionInputView = new ckeditor5_ui_src/* LabeledFieldView */.KP(locale, ckeditor5_ui_src/* createLabeledDropdown */.FH);
      this.toggleActionInputView.set({
        label: t("Action")
      });
      this.toggleActionInputView.fieldView.buttonView.set({
        isOn: false,
        withText: true
      });
      this.toggleActionInputView.fieldView.buttonView.bind("label").to(this, "params", function (params) {
        return actionLabels[params === null || params === void 0 ? void 0 : params.action];
      });
      this.toggleActionInputView.fieldView.on("execute", function (evt) {
        _this7.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this7.params), {}, {
          action: evt.source._value
        });
      });
      this.toggleActionInputView.bind("isEmpty").to(this, "params", function (params) {
        return !(params !== null && params !== void 0 && params.action);
      });
      var actionDropdownDefinitions = getDropdownDefinitions(actionLabels);
      actionDropdownDefinitions.map(function (definition) {
        definition.model.bind("isOn").to(_this7, "params", function (value) {
          return (value === null || value === void 0 ? void 0 : value.action) === definition.model._value;
        });
      });
      (0,ckeditor5_ui_src/* addListToDropdown */.Pm)(this.toggleActionInputView.fieldView, actionDropdownDefinitions);
      var inputs = new FormGroupView(locale, {
        children: [this.toggleBlockInputView, this.toggleActionInputView]
      });
      inputs.bind("isVisible").to(this, "type", function (value) {
        return value === "toggle";
      });
      return inputs;
    }

    /**
     * Creates a group of inputs for "scenario" links.
     *
     * @private
     * @returns {FormGroupView} Form group view instance.
     */
  }, {
    key: "_createScenarioInputs",
    value: function _createScenarioInputs() {
      var _this8 = this;
      var locale = this.locale;
      var t = locale.t;

      // Scenario.
      var scenarioLabels = getComponentLabels("Scenario");
      this.scenarioScenarioInputView = new ckeditor5_ui_src/* LabeledFieldView */.KP(locale, ckeditor5_ui_src/* createLabeledDropdown */.FH);
      this.scenarioScenarioInputView.set({
        label: t("Scenario")
      });
      this.scenarioScenarioInputView.fieldView.buttonView.set({
        isOn: false,
        withText: true
      });
      this.scenarioScenarioInputView.fieldView.buttonView.bind("label").to(this, "params", function (params) {
        return scenarioLabels[params === null || params === void 0 ? void 0 : params.id];
      });
      this.scenarioScenarioInputView.fieldView.on("execute", function (evt) {
        _this8.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this8.params), {}, {
          id: evt.source._value
        });
      });
      this.scenarioScenarioInputView.bind("isEmpty").to(this, "params", function (params) {
        return !(params !== null && params !== void 0 && params.id);
      });
      var idDropdownDefinitions = getDropdownDefinitions(scenarioLabels);
      idDropdownDefinitions.map(function (definition) {
        definition.model.bind("isOn").to(_this8, "params", function (value) {
          return (value === null || value === void 0 ? void 0 : value.id) === definition.model._value;
        });
      });
      (0,ckeditor5_ui_src/* addListToDropdown */.Pm)(this.scenarioScenarioInputView.fieldView, idDropdownDefinitions);
      var inputs = new FormGroupView(locale, {
        children: [this.scenarioScenarioInputView]
      });
      inputs.bind("isVisible").to(this, "type", function (value) {
        return value === "scenario";
      });
      return inputs;
    }

    /**
     * Creates a group of inputs for "(enter|exit|toggle)Fullscreen" links.
     *
     * @private
     * @returns {FormGroupView} Form group view instance.
     */
  }, {
    key: "_createFullscreenInputs",
    value: function _createFullscreenInputs() {
      var _this9 = this;
      var locale = this.locale;
      var t = locale.t;

      // Action.
      var actionLabels = getFullscreenActionLabels(t);
      this.fullscreenActionInputView = new ckeditor5_ui_src/* LabeledFieldView */.KP(locale, ckeditor5_ui_src/* createLabeledDropdown */.FH);
      this.fullscreenActionInputView.set({
        label: t("Action")
      });
      this.fullscreenActionInputView.fieldView.buttonView.set({
        isOn: false,
        withText: true
      });
      this.fullscreenActionInputView.fieldView.buttonView.bind("label").to(this, "params", function (params) {
        return actionLabels[params === null || params === void 0 ? void 0 : params.action];
      });
      this.fullscreenActionInputView.fieldView.on("execute", function (evt) {
        _this9.params = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this9.params), {}, {
          action: evt.source._value
        });
      });
      this.fullscreenActionInputView.bind("isEmpty").to(this, "params", function (params) {
        return !(params !== null && params !== void 0 && params.action);
      });
      var actionDropdownDefinitions = getDropdownDefinitions(actionLabels);
      actionDropdownDefinitions.map(function (definition) {
        definition.model.bind("isOn").to(_this9, "params", function (value) {
          return (value === null || value === void 0 ? void 0 : value.action) === definition.model._value;
        });
      });
      (0,ckeditor5_ui_src/* addListToDropdown */.Pm)(this.fullscreenActionInputView.fieldView, actionDropdownDefinitions);
      var inputs = new FormGroupView(locale, {
        children: [this.fullscreenActionInputView]
      });
      inputs.bind("isVisible").to(this, "type", function (value) {
        return value === "fullscreen";
      });
      return inputs;
    }

    /**
     * Creates the tip icon view.
     *
     * @private
     * @returns {IconView}
     */
  }, {
    key: "_createTipView",
    value: function _createTipView() {
      var locale = this.locale;
      var t = locale.t;
      var view = new ckeditor5_ui_src/* ButtonView */.r5(locale);
      view.set({
        icon: tip,
        withText: false,
        tooltip: t('TIP: Use the "behaviors" to program all the actions\nyou want when clicking on a text or an image!')
      });
      view.extendTemplate({
        attributes: {
          class: "ck-link__tip"
        }
      });
      return view;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "_createFormChildren",
    value: function _createFormChildren(manualDecorators) {
      var children = (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(CustomLinkFormView.prototype), "_createFormChildren", this).call(this, manualDecorators);
      this.typeInputView = this._createTypeInput();
      this._playInputsGroup = this._createPlayInputs();
      this._seekInputsGroup = this._createSeekInputs();
      this._pageInputsGroup = this._createPageInputs();
      this._blockToggleInputsGroup = this._createBlockToggleInputs();
      this._scenarioInputsGroup = this._createScenarioInputs();
      this._fullscreenInputsGroup = this._createFullscreenInputs();
      this._tipView = this._createTipView();
      children.addMany([this.typeInputView, this._playInputsGroup, this._seekInputsGroup, this._pageInputsGroup, this._blockToggleInputsGroup, this._scenarioInputsGroup, this._fullscreenInputsGroup], 0);
      children.add(this._tipView);
      return children;
    }

    /**
     * Update the URL input value.
     */
  }, {
    key: "updateValue",
    value: function updateValue() {
      if (this.type === "url") return;
      var type = this.type;
      var params = this.params;
      var value = "";
      switch (type) {
        case "play":
          value = `#${type}`;
          if (params !== null && params !== void 0 && params.excerpt) {
            var _params$start, _params$end, _params$scenario;
            value += `=${(_params$start = params.start) !== null && _params$start !== void 0 ? _params$start : ""}`;
            value += `,${(_params$end = params.end) !== null && _params$end !== void 0 ? _params$end : ""}`;
            value += `,${(_params$scenario = params.scenario) !== null && _params$scenario !== void 0 ? _params$scenario : ""}`;
            if (params !== null && params !== void 0 && params.highlight) {
              value += ",1";
            }
          }
          break;
        case "seek":
          value = `#${type}=${params.time}`;
          break;
        case "page":
          value = `#${type}=${params.block},${params.index}`;
          break;
        case "toggle":
          value = `#${params.action}Block=${params.name}`;
          break;
        case "scenario":
          value = `#scenario=${params.id}`;
          break;
        case "fullscreen":
          value = `#${params.action}Fullscreen`;
          break;
        default:
          value = type ? `#${type}` : "";
      }
      this.urlInputView.fieldView.value = value;
      this.fire("update");
    }
  }]);
  return CustomLinkFormView;
}(linkformview/* default */.Z);
/**
 * Fired when the form view's value is updated.
 *
 * @event update
 */

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/theme/icons/link.svg
/* harmony default export */ var icons_link = ("<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 22 22\">\n  <path d=\"M12.069 13.455c.308.307.338.781.063 1.055l-4.555 4.553c-.271.271-.747.244-1.053-.064l-3.526-3.523c-.306-.309-.334-.781-.063-1.055L7.49 9.867c.272-.272.747-.243 1.053.063.307.306.337.781.064 1.053l-3.564 3.565c-.272.271-.245.746.063 1.053l1.29 1.291c.308.307.782.334 1.055.064l3.563-3.564c.274-.273.748-.246 1.055.063M19 6.526c.307.306.336.78.063 1.053l-4.554 4.554c-.27.271-.747.244-1.054-.063-.307-.308-.336-.782-.065-1.055l3.565-3.563c.273-.272.243-.747-.063-1.053l-1.29-1.291c-.307-.308-.78-.337-1.053-.064l-3.566 3.563c-.271.273-.746.244-1.053-.063-.307-.306-.335-.781-.064-1.052l4.555-4.555c.271-.272.747-.243 1.053.063L19 6.526z\"/>\n  <path d=\"M14.217 7.783c.31.308.338.78.063 1.053l-5.446 5.445c-.27.271-.745.242-1.053-.064-.306-.305-.335-.781-.063-1.053l5.446-5.444c.272-.274.747-.245 1.053.063\"/>\n</svg>\n");
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/linkui.js










function linkui_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }






var CustomLinkUI = /*#__PURE__*/function (_LinkUI) {
  (0,inherits/* default */.Z)(CustomLinkUI, _LinkUI);
  function CustomLinkUI() {
    (0,classCallCheck/* default */.Z)(this, CustomLinkUI);
    return linkui_callSuper(this, CustomLinkUI, arguments);
  }
  (0,createClass/* default */.Z)(CustomLinkUI, [{
    key: "_createFormView",
    value:
    /**
     * @inheritDoc
     */
    function _createFormView() {
      var _this = this;
      var editor = this.editor;
      var linkCommand = editor.commands.get("link");
      var defaultProtocol = editor.config.get("link.defaultProtocol");
      var allowCreatingEmptyLinks = editor.config.get("link.allowCreatingEmptyLinks");
      var formView = new ((0,ckeditor5_ui_src/* CssTransitionDisablerMixin */.RX)(CustomLinkFormView))(editor.locale, linkCommand);
      formView.urlInputView.fieldView.bind("value").to(linkCommand, "value");

      // Form elements should be read-only when corresponding commands are disabled.
      formView.typeInputView.bind("isEnabled").to(linkCommand, "isEnabled");
      formView.urlInputView.bind("isEnabled").to(linkCommand, "isEnabled");

      // Disable the "save" button if the command is disabled or the input is empty despite being required.
      formView.saveButtonView.bind("isEnabled").to(linkCommand, "isEnabled", formView.urlInputView, "isEmpty", function (isCommandEnabled, isInputEmpty) {
        return isCommandEnabled && (allowCreatingEmptyLinks || !isInputEmpty);
      });

      // Execute link command after clicking the "Save" button.
      this.listenTo(formView, "submit", function () {
        var value = formView.urlInputView.fieldView.element.value;
        var parsedUrl = (0,utils/* addLinkProtocolIfApplicable */.nA)(value, defaultProtocol);
        editor.execute("link", parsedUrl, formView.getDecoratorSwitchesState());
        _this._closeFormView();
      });

      // Hide the panel after clicking the "Cancel" button.
      this.listenTo(formView, "cancel", function () {
        _this._closeFormView();
      });

      // Close the panel on esc key press when the **form has focus**.
      formView.keystrokes.set("Esc", function (data, cancel) {
        _this._closeFormView();
        cancel();
      });

      // Update the balloon's position when the form updates.
      formView.on("update", function () {
        if (_this._isUIVisible) {
          _this._balloon.updatePosition();
        }
      });
      return formView;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "_createToolbarLinkButton",
    value: function _createToolbarLinkButton() {
      var _this2 = this;
      var editor = this.editor;
      var linkCommand = editor.commands.get("link");
      var t = editor.t;
      editor.ui.componentFactory.add("link", function (locale) {
        var button = new ckeditor5_ui_src/* ButtonView */.r5(locale);
        button.isEnabled = true;
        button.label = t("Link");
        button.icon = icons_link;
        button.keystroke = utils/* LINK_KEYSTROKE */.qN;
        button.tooltip = true;
        button.withText = true;
        button.isToggleable = true;

        // Bind button to the command.
        button.bind("isEnabled").to(linkCommand, "isEnabled");
        button.bind("isOn").to(linkCommand, "value", function (value) {
          return !!value;
        });

        // Show the panel on button click.
        _this2.listenTo(button, "execute", function () {
          return _this2._showUI(true);
        });
        return button;
      });
    }
  }, {
    key: "_addFormView",
    value: function _addFormView() {
      (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(CustomLinkUI.prototype), "_addFormView", this).call(this);
      var editor = this.editor;
      var linkCommand = editor.commands.get("link");

      // Make sure that each time the panel shows up, all fields remain in sync
      // with the values of the command.
      this.formView.unbind("type", "params");
      this.formView.bind("type", "params").to(linkCommand);
      this.formView.updateValue();

      // Select input when form view is currently visible.
      if (this._balloon.visibleView === this.formView) {
        this.formView.focus();
      }
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "CustomLinkUI";
    }
  }]);
  return CustomLinkUI;
}(ckeditor5_link_src/* LinkUI */.PB);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/link.js









function link_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }




var CustomLink = /*#__PURE__*/function (_Link) {
  (0,inherits/* default */.Z)(CustomLink, _Link);
  function CustomLink() {
    (0,classCallCheck/* default */.Z)(this, CustomLink);
    return link_callSuper(this, CustomLink, arguments);
  }
  (0,createClass/* default */.Z)(CustomLink, null, [{
    key: "requires",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return [CustomLinkEditing, CustomLinkUI, CustomAutoLink];
    }
  }, {
    key: "pluginName",
    get: function get() {
      return "CustomLink";
    }
  }]);
  return CustomLink;
}(ckeditor5_link_src/* Link */.rU);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/linkimageediting.js









function linkimageediting_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }


var CustomLinkImageEditing = /*#__PURE__*/function (_LinkImageEditing) {
  (0,inherits/* default */.Z)(CustomLinkImageEditing, _LinkImageEditing);
  function CustomLinkImageEditing() {
    (0,classCallCheck/* default */.Z)(this, CustomLinkImageEditing);
    return linkimageediting_callSuper(this, CustomLinkImageEditing, arguments);
  }
  (0,createClass/* default */.Z)(CustomLinkImageEditing, null, [{
    key: "requires",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return ["ImageEditing", "ImageUtils", CustomLinkEditing];
    }
  }, {
    key: "pluginName",
    get: function get() {
      return "CustomLinkImageEditing";
    }
  }]);
  return CustomLinkImageEditing;
}(ckeditor5_link_src/* LinkImageEditing */.O7);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/linkimageui.js









function linkimageui_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }



var CustomLinkImageUI = /*#__PURE__*/function (_LinkImageUI) {
  (0,inherits/* default */.Z)(CustomLinkImageUI, _LinkImageUI);
  function CustomLinkImageUI() {
    (0,classCallCheck/* default */.Z)(this, CustomLinkImageUI);
    return linkimageui_callSuper(this, CustomLinkImageUI, arguments);
  }
  (0,createClass/* default */.Z)(CustomLinkImageUI, null, [{
    key: "requires",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return [CustomLinkEditing, CustomLinkUI, "ImageBlockEditing"];
    }
  }, {
    key: "pluginName",
    get: function get() {
      return "CustomLinkImageUI";
    }
  }]);
  return CustomLinkImageUI;
}(ckeditor5_link_src/* LinkImageUI */.Y7);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/linkimage.js









function linkimage_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }



var CustomLinkImage = /*#__PURE__*/function (_LinkImage) {
  (0,inherits/* default */.Z)(CustomLinkImage, _LinkImage);
  function CustomLinkImage() {
    (0,classCallCheck/* default */.Z)(this, CustomLinkImage);
    return linkimage_callSuper(this, CustomLinkImage, arguments);
  }
  (0,createClass/* default */.Z)(CustomLinkImage, null, [{
    key: "pluginName",
    get: function get() {
      return "CustomLinkImage";
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "requires",
    get: function get() {
      return [CustomLinkImageEditing, CustomLinkImageUI];
    }
  }]);
  return CustomLinkImage;
}(ckeditor5_link_src/* LinkImage */.yI);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-link/src/index.js








;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-sourceediting/src/sourceediting.js









function sourceediting_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }

var CustomSourceEditing = /*#__PURE__*/function (_SourceEditing) {
  (0,inherits/* default */.Z)(CustomSourceEditing, _SourceEditing);
  function CustomSourceEditing() {
    (0,classCallCheck/* default */.Z)(this, CustomSourceEditing);
    return sourceediting_callSuper(this, CustomSourceEditing, arguments);
  }
  (0,createClass/* default */.Z)(CustomSourceEditing, [{
    key: "_isAllowedToHandleSourceEditingMode",
    value: function _isAllowedToHandleSourceEditingMode() {
      return true;
    }
  }]);
  return CustomSourceEditing;
}(ckeditor5_source_editing_src/* SourceEditing */.o);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-sourceediting/src/index.js

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(89078);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(44012);
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-uploadadapter/src/adapter.js





var Adapter = /*#__PURE__*/function () {
  function Adapter(loader) {
    (0,classCallCheck/* default */.Z)(this, Adapter);
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  // @todo: handle uplaod progress
  (0,createClass/* default */.Z)(Adapter, [{
    key: "upload",
    value: function () {
      var _upload = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var _useModule, uploadFiles, file, assets;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _useModule = (0,module_manager/* useModule */.b7)("assets_library"), uploadFiles = _useModule.uploadFiles;
              _context.next = 3;
              return this.loader.file;
            case 3:
              file = _context.sent;
              _context.next = 6;
              return uploadFiles([file]);
            case 6:
              assets = _context.sent;
              return _context.abrupt("return", {
                default: assets[0].url
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function upload() {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }]);
  return Adapter;
}();

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-uploadadapter/src/uploadadapter.js









function uploadadapter_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }


var UploadAdapter = /*#__PURE__*/function (_Plugin) {
  (0,inherits/* default */.Z)(UploadAdapter, _Plugin);
  /**
   * @inheritdoc
   */
  function UploadAdapter(editor) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, UploadAdapter);
    _this = uploadadapter_callSuper(this, UploadAdapter, [editor]);
    editor.plugins.get("FileRepository").createUploadAdapter = function (loader) {
      return new Adapter(loader);
    };
    return _this;
  }
  return (0,createClass/* default */.Z)(UploadAdapter);
}(ckeditor5_core_src/* Plugin */.Sy);

;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/plugins/ckeditor5-uploadadapter/src/index.js

// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-editor-decoupled/src/index.js + 10 modules
var ckeditor5_editor_decoupled_src = __webpack_require__(27500);
;// CONCATENATED MODULE: ./packages/editor/modules/component_form/ckeditor/index.js










































function createEditor(el) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$language = _ref.language,
    language = _ref$language === void 0 ? "fr" : _ref$language,
    _ref$extraFonts = _ref.extraFonts,
    extraFonts = _ref$extraFonts === void 0 ? [] : _ref$extraFonts;
  return ckeditor5_editor_decoupled_src/* DecoupledEditor */.v.create(el, {
    language,
    removePlugins: [ckeditor5_link_src/* Link */.rU, ckeditor5_link_src/* AutoLink */.EX, ckeditor5_link_src/* LinkEditing */.Wz, ckeditor5_link_src/* LinkUI */.PB, ckeditor5_link_src/* LinkImage */.yI, ckeditor5_link_src/* LinkImageEditing */.O7, ckeditor5_source_editing_src/* SourceEditing */.o],
    plugins: [src/* Alignment */.v2, BehaviorTrigger, ckeditor5_block_quote_src/* BlockQuote */.R4, ckeditor5_basic_styles_src/* Bold */.d8, ckeditor5_essentials_src/* Essentials */.m, ckeditor5_font_src/* Font */.Zx, ckeditor5_html_support_src/* GeneralHtmlSupport */.B3, ckeditor5_heading_src/* Heading */.X6, ckeditor5_image_src/* Image */.Ee, ckeditor5_image_src/* ImageResize */.yX, ckeditor5_image_src/* ImageStyle */.Hn, ckeditor5_image_src/* ImageTextAlternative */.Q5, ckeditor5_image_src/* ImageToolbar */.Uh, ckeditor5_image_src/* ImageUpload */.Ur, ckeditor5_indent_src/* Indent */.Ai, ckeditor5_indent_src/* IndentBlock */.b, ckeditor5_basic_styles_src/* Italic */.Tx, CustomLink, CustomLinkImage, ckeditor5_list_src/* List */.aV, ckeditor5_paragraph_src/* Paragraph */.n, ckeditor5_remove_format_src/* RemoveFormat */.$m, CustomSourceEditing, ckeditor5_special_characters_src/* SpecialCharacters */.tT, ckeditor5_special_characters_src/* SpecialCharactersEssentials */.W6, ckeditor5_basic_styles_src/* Strikethrough */.nY, ckeditor5_basic_styles_src/* Subscript */.ar, ckeditor5_basic_styles_src/* Superscript */.$2, ckeditor5_table_src/* Table */.iA, ckeditor5_table_src/* TableToolbar */.fj, ckeditor5_basic_styles_src/* Underline */.v6, UploadAdapter],
    toolbar: {
      items: ["undo", "redo", "|", "bold", "italic", "underline", "strikethrough", "subscript", "superscript", "|", "heading", "blockQuote", "removeFormat", "|", "fontFamily", "fontSize", "fontColor", "fontBackgroundColor", "|", "numberedList", "bulletedList", "outdent", "indent", "|", "alignment", "|", "uploadImage", "insertTable", "specialCharacters", "-", "link", "addBehaviorTrigger", "|", "sourceEditing"],
      shouldNotGroupWhenFull: true
    },
    heading: {
      options: [{
        model: "paragraph",
        title: "Paragraph"
      }, {
        model: "heading1",
        view: "h1",
        title: "Heading 1"
      }, {
        model: "heading2",
        view: "h2",
        title: "Heading 2"
      }, {
        model: "heading3",
        view: "h3",
        title: "Heading 3"
      }, {
        model: "heading4",
        view: "h4",
        title: "Heading 4"
      }, {
        model: "heading5",
        view: "h5",
        title: "Heading 5"
      }, {
        model: "heading6",
        view: "h6",
        title: "Heading 6"
      }, {
        model: "div",
        view: "div",
        title: "Division"
      }, {
        model: "pre",
        view: "pre",
        title: "Preformatted"
      }, {
        model: "address",
        view: "address",
        title: "Address"
      }]
    },
    fontFamily: {
      options: ["default"].concat((0,toConsumableArray/* default */.Z)(extraFonts), ["Arial, Helvetica, sans-serif", "Courier New, Courier, monospace", "Georgia, serif", "Lucida Sans Unicode, Lucida Grande, sans-serif", "Tahoma, Geneva, sans-serif", "Times New Roman, Times, serif", "Trebuchet MS, Helvetica, sans-serif", "Verdana, Geneva, sans-serif"]),
      supportAllValues: true
    },
    fontSize: {
      options: ["default", 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
      supportAllValues: true
    },
    image: {
      toolbar: ["linkImage", "|", "imageStyle:inline", "imageStyle:block", "imageStyle:side", "|", "imageTextAlternative"]
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
    },
    htmlSupport: {
      allow: [{
        name: /^(div|a|p|i|em|b|strong|h[1-6]|span|big|small|q|cite|ins|del|var|samp|kbd|code|tt)$/,
        classes: true,
        styles: true,
        attributes: {
          dir: /^(rtl|ltr)$/
        }
      }, {
        name: "a",
        attributes: {
          target: "_blank",
          rel: /^(noopener|nofollow)$/
        }
      }],
      disallow: []
    },
    updateSourceElementOnDestroy: true
  });
}

/***/ }),

/***/ 65990:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = ("<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 22 22\">\n  <path d=\"M12.069 13.455c.308.307.338.781.063 1.055l-4.555 4.553c-.271.271-.747.244-1.053-.064l-3.526-3.523c-.306-.309-.334-.781-.063-1.055L7.49 9.867c.272-.272.747-.243 1.053.063.307.306.337.781.064 1.053l-3.564 3.565c-.272.271-.245.746.063 1.053l1.29 1.291c.308.307.782.334 1.055.064l3.563-3.564c.274-.273.748-.246 1.055.063M19 6.526c.307.306.336.78.063 1.053l-4.554 4.554c-.27.271-.747.244-1.054-.063-.307-.308-.336-.782-.065-1.055l3.565-3.563c.273-.272.243-.747-.063-1.053l-1.29-1.291c-.307-.308-.78-.337-1.053-.064l-3.566 3.563c-.271.273-.746.244-1.053-.063-.307-.306-.335-.781-.064-1.052l4.555-4.555c.271-.272.747-.243 1.053.063L19 6.526z\"/>\n  <path d=\"M14.217 7.783c.31.308.338.78.063 1.053l-5.446 5.445c-.27.271-.745.242-1.053-.064-.306-.305-.335-.781-.063-1.053l5.446-5.444c.272-.274.747-.245 1.053.063M19.035 19.465 17.48 21.02a.824.824 0 1 1-1.207-1.125l.041-.041 1.555-1.557-1.557-1.555a.824.824 0 0 1 1.166-1.166l1.556 1.555 1.557-1.557a.825.825 0 1 1 1.166 1.168l-1.555 1.555 1.555 1.557a.824.824 0 1 1-1.166 1.166l-1.556-1.555z\"/>\n</svg>\n");

/***/ })

}]);
//# sourceMappingURL=metaScore.Editor.umd.251.js.map