"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkmetaScore"] = (typeof self !== 'undefined' ? self : this)["webpackChunkmetaScore"] || []).push([[773],{

/***/ 9773:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/blockly/core-browser.js
var core_browser = __webpack_require__(47513);
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/blocks/app.js

(0,core_browser.defineBlocksWithJsonArray)([{
  type: "app_startup",
  message0: "%{BKY_APP_STARTUP}",
  message1: "%{BKY_APP_STARTUP_THEN}",
  args1: [{
    type: "input_statement",
    name: "STATEMENT"
  }],
  style: "trigger_blocks",
  tooltip: "%{BKY_APP_STARTUP_TOOLTIP}",
  helpUrl: "%{BKY_APP_STARTUP_HELPURL}"
}, {
  type: "app_enter_fullscreen",
  message0: "%{BKY_APP_ENTER_FULLSCREEN}",
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_APP_ENTER_FULLSCREEN_TOOLTIP}",
  helpUrl: "%{BKY_APP_ENTER_FULLSCREEN_HELPURL}"
}, {
  type: "app_exit_fullscreen",
  message0: "%{BKY_APP_EXIT_FULLSCREEN}",
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_APP_EXIT_FULLSCREEN_TOOLTIP}",
  helpUrl: "%{BKY_APP_EXIT_FULLSCREEN_HELPURL}"
}, {
  type: "app_toggle_fullscreen",
  message0: "%{BKY_APP_TOGGLE_FULLSCREEN}",
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_APP_TOGGLE_FULLSCREEN_TOOLTIP}",
  helpUrl: "%{BKY_APP_TOGGLE_FULLSCREEN_HELPURL}"
}]);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(64224);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(16097);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(60228);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(47522);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(70560);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(76801);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(93374);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(34338);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(50886);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(38077);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(2918);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(64043);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(57267);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(39241);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1120);
// EXTERNAL MODULE: ./packages/core/modules/app_behaviors/blockly/core/field_dropdown.js + 2 modules
var field_dropdown = __webpack_require__(20045);
// EXTERNAL MODULE: ./packages/core/services/module-manager/index.js
var module_manager = __webpack_require__(18003);
// EXTERNAL MODULE: ./packages/core/modules/app_behaviors/blockly/constants.js
var constants = __webpack_require__(5842);
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/utils.js




/**
 * Update a dropdown field's options and value depending on an options ref.
 * @param {*} field The dropdown field
 * @param {*} optionsRef The options ref
 */
function watchDrowpdownFieldOptions(field, optionsRef) {
  var block = field.getSourceBlock();
  if (!block) throw new core_browser.UnattachedFieldError();
  var unwatch = (0,runtime_core_esm_bundler/* watch */.YP)(optionsRef, function (newOptions) {
    // Update the field's dropdown list and value when new options are available.
    var oldValue = field.getValue();
    var newOptionsIncludeOldValue = newOptions.find(function (option) {
      return option[1] == oldValue;
    }) != undefined;
    var newValue = newOptionsIncludeOldValue ? oldValue : newOptions[0][1];
    field.getOptions(false);
    field.setValue(newValue);
  });
  var origDestroy = block.destroy;
  block.destroy = function () {
    if (typeof origDestroy === "function") origDestroy();
    unwatch();
  };
}
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/blocks/components.js



















var BREADCRUMB_SEPARATOR = " › ";
var SUPPORTED_PROPERTIES = ["background-color", "border-color", "border-width", "hidden", "loop-duration", "reversed", "cursor-width", "cursor-color"];

/**
 * Get component dropdown options
 * @param {array} components The components
 * @param {boolean} recursive Whether to recurse to child components.
 * @param {number} level_ The current recursion level, used internally.
 * @param {string} breadcrumb_ The current recursion breadcrumb, used internally.
 * @returns {array} An options array
 */
function getComponentOptions() {
  var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var level_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var breadcrumb_ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var _useModule = (0,module_manager/* useModule */.b7)("app_components"),
    getComponentChildren = _useModule.getComponentChildren,
    getComponentLabel = _useModule.getComponentLabel,
    getComponentIconURL = _useModule.getComponentIconURL;
  var options = [];
  if (components.length > 0) {
    components.forEach(function (c) {
      var name = getComponentLabel(c);
      var label = name;
      var icon_url = getComponentIconURL(c);
      if (icon_url) {
        label = document.createElement("div");
        label.classList.add("blocklyMenuItemLabel");
        if (level_) {
          label.style.setProperty("--level", level_);
        }
        var icon = document.createElement("img");
        icon.src = icon_url;
        icon.classList.add("blocklyMenuItemLabelIcon");
        label.appendChild(icon);
        var text = document.createElement("div");
        text.classList.add("blocklyMenuItemLabelText");
        text.appendChild(document.createTextNode(name));
        label.appendChild(text);
        if (breadcrumb_) {
          var breadcrumb = document.createElement("div");
          breadcrumb.classList.add("blocklyMenuItemLabelBreadcrumb");
          breadcrumb.appendChild(document.createTextNode(breadcrumb_));
          label.appendChild(breadcrumb);
        }
        label.setAttribute("title", breadcrumb_ ? `${breadcrumb_}${BREADCRUMB_SEPARATOR}${name}` : name);
      }
      var option = [{
        label,
        text: name
      }, `${c.type}:${c.id}`];
      options.push(option);
      if (recursive) {
        var children = getComponentChildren(c);
        if (["Scenario", "Page"].includes(c.type)) {
          children.reverse();
        }
        options = [].concat((0,toConsumableArray/* default */.Z)(options), (0,toConsumableArray/* default */.Z)(getComponentOptions(children, true, level_ + 1, level_ > 0 ? `${breadcrumb_}${BREADCRUMB_SEPARATOR}${name}` : name)));
      }
    });
  }
  return options;
}

/**
 * Get the options array for the PROPERTY field.
 * @param {string} component_type The component type.
 * @returns {array} The options.
 */
function getPropertyOptions(component_type) {
  if (component_type === constants/* EMPTY_OPTION */.X) {
    return [[core_browser.Msg.COMPONENTS_EMPTY_OPTION, constants/* EMPTY_OPTION */.X]].concat((0,toConsumableArray/* default */.Z)(SUPPORTED_PROPERTIES.map(function (property) {
      return [core_browser.Msg.COMPONENTS_PROPERTY[property], property];
    })));
  }
  var _useModule2 = (0,module_manager/* useModule */.b7)("app_components"),
    getModelByType = _useModule2.getModelByType;
  return Object.keys(getModelByType(component_type).properties).filter(function (property) {
    return SUPPORTED_PROPERTIES.includes(property);
  }).map(function (property) {
    return [core_browser.Msg.COMPONENTS_PROPERTY[property], property];
  });
}
var scenarioOptions = (0,reactivity_esm_bundler/* ref */.iH)([]);
(0,runtime_core_esm_bundler/* watchEffect */.m0)(function () {
  var _useModule3 = (0,module_manager/* useModule */.b7)("app_components"),
    getComponentsByType = _useModule3.getComponentsByType;
  scenarioOptions.value = getComponentOptions(getComponentsByType("Scenario"));
});
core_browser.Extensions.register("components_scenario_options", function () {
  var scenario_input = this.getInput("COMPONENT");
  if (!scenario_input) return;
  var scenario_field = new field_dropdown/* default */.Z(function () {
    var options = scenarioOptions.value;
    if (options.length === 0) {
      var block = this.getSourceBlock();
      if (block) {
        block.setEnabled(false);
        block.setTooltip(core_browser.Msg.COMPONENTS_NO_SCENARIO_TOOLTIP);
      }
      this.setEnabled(false);
      return [[core_browser.Msg.COMPONENTS_EMPTY_OPTION, constants/* EMPTY_OPTION */.X]];
    }
    return options;
  }, null, {
    searchable: true
  });
  scenario_input.appendField(scenario_field, "COMPONENT");

  // Update the field's dropdown list and value when new options are available.
  watchDrowpdownFieldOptions(scenario_field, scenarioOptions);
});
var blockOptions = (0,reactivity_esm_bundler/* ref */.iH)([]);
(0,runtime_core_esm_bundler/* watchEffect */.m0)(function () {
  var _useModule4 = (0,module_manager/* useModule */.b7)("app_components"),
    getComponentsByType = _useModule4.getComponentsByType;
  blockOptions.value = getComponentOptions(getComponentsByType("Block"));
});
core_browser.Extensions.register("components_block_options", function () {
  var block_input = this.getInput("COMPONENT");
  if (!block_input) return;
  var block_field = new field_dropdown/* default */.Z(function () {
    var options = blockOptions.value;
    if (options.length === 0) {
      var block = this.getSourceBlock();
      if (block) {
        block.setEnabled(false);
        block.setTooltip(core_browser.Msg.COMPONENTS_NO_BLOCK_TOOLTIP);
      }
      this.setEnabled(false);
      return [[core_browser.Msg.COMPONENTS_EMPTY_OPTION, constants/* EMPTY_OPTION */.X]];
    }
    return options;
  }, null, {
    searchable: true
  });
  block_input.appendField(block_field, "COMPONENT");

  // Update the field's dropdown list and value when new options are available.
  watchDrowpdownFieldOptions(block_field, blockOptions);
});
var componentOptions = (0,reactivity_esm_bundler/* ref */.iH)([]);
(0,runtime_core_esm_bundler/* watchEffect */.m0)(function () {
  var _useModule5 = (0,module_manager/* useModule */.b7)("app_components"),
    getComponentsByType = _useModule5.getComponentsByType;
  componentOptions.value = getComponentOptions(getComponentsByType("Scenario"), true);
});
core_browser.Extensions.register("components_component_options", function () {
  var _this = this;
  var component_input = this.getInput("COMPONENT");
  if (!component_input) return;
  var mock = this.type.endsWith("_mock");
  var component_field = new field_dropdown/* default */.Z(function () {
    var empty_option = [{
      label: core_browser.Msg.COMPONENTS_EMPTY_OPTION,
      default: true,
      hidden: true
    }, constants/* EMPTY_OPTION */.X];
    if (mock) return [empty_option];
    return [empty_option].concat((0,toConsumableArray/* default */.Z)(componentOptions.value));
  }, null, {
    searchable: true
  });
  component_input.appendField(component_field, "COMPONENT");

  // Update the field's dropdown list and value when new options are available.
  watchDrowpdownFieldOptions(component_field, componentOptions);
  if (mock) {
    component_field.setEnabled(false);
    this.setEnabled(false);
    this.setTooltip(function () {
      return core_browser.Msg.COMPONENTS_PROPERTY_MOCK_TOOLTIP.replace("%2", core_browser.Msg.COMPONENTS_PROPERTY[_this.property_]);
    });
  }
});
core_browser.Extensions.register("components_property_options", function () {
  var property_input = this.getInput("PROPERTY");
  if (!property_input) return;
  var mock = this.type.endsWith("_mock");
  var property_field = new field_dropdown/* default */.Z(function () {
    var block = this.getSourceBlock();
    if (!block || mock) {
      if (block && block.property_) {
        return [[core_browser.Msg.COMPONENTS_PROPERTY[block.property_], block.property_]];
      }
      return [[core_browser.Msg.COMPONENTS_EMPTY_OPTION, constants/* EMPTY_OPTION */.X]];
    }
    var component_value = block.getFieldValue("COMPONENT");
    var component_type = block.getComponentType_(component_value);
    return getPropertyOptions(component_type);
  });
  property_input.appendField(property_field, "PROPERTY");
  if (mock) {
    property_field.setEnabled(false);
  }
});
var PROPERTY_OPTIONS_MUTATOR_MIXIN = {
  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {?{elseIfCount: (number|undefined), haseElse: (boolean|undefined)}}
   *     The state of this block.
   */
  saveExtraState: function saveExtraState() {
    var property_input = this.getInput("PROPERTY");
    if (property_input) {
      return {
        property: this.getFieldValue("PROPERTY")
      };
    }
    return null;
  },
  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block.
   */
  loadExtraState: function loadExtraState(state) {
    var property_input = this.getInput("PROPERTY");
    if (property_input) {
      this.property_ = state["property"];
    }
  },
  /**
   * Callback called whenever the block's parent workspace changes.
   * @param {object} evt The event.
   */
  onchange: function onchange(evt) {
    switch (evt.type) {
      case "create":
        this.updatePropertyField_();
        break;
      case "change":
        if (evt.element === "field") {
          if (evt.name === "COMPONENT") {
            var newType = this.getComponentType_(evt.newValue);
            var oldType = this.getComponentType_(evt.oldValue);

            // Type didn't change, skip update.
            if (newType === oldType) return;
            this.updatePropertyField_();
          } else if (evt.name === "PROPERTY") {
            this.property_ = evt.newValue;
            this.updateChecks_();
          }
        }
        break;
    }
  },
  /**
   * Parse the component type from a COMPONENT field value.
   * @param {string?} component_value The value to parse, the current field value is used if null.
   * @returns {string?} The component id or null if the value counldn't be parsed.
   */
  getComponentType_: function getComponentType_(component_value) {
    if (typeof component_value === "undefined") {
      component_value = this.getFieldValue("COMPONENT");
    }
    if (!component_value) return null;
    var _component_value$spli = component_value.split(":"),
      _component_value$spli2 = (0,slicedToArray/* default */.Z)(_component_value$spli, 1),
      type = _component_value$spli2[0];
    return type;
  },
  /**
   * Get the compatible value type or list of value types for the VALUE input.
   * @param {string} component_type The component type.
   * @param {string} property_name The property's name.
   * @returns {string|array<string>|null} The type check.
   */
  getPropertyValueTypeCheck_: function getPropertyValueTypeCheck_(component_type, property_name) {
    var _getModelByType$prope;
    if (component_type === constants/* EMPTY_OPTION */.X) return null;
    var _useModule6 = (0,module_manager/* useModule */.b7)("app_components"),
      getModelByType = _useModule6.getModelByType;
    var property = (_getModelByType$prope = getModelByType(component_type).properties) === null || _getModelByType$prope === void 0 ? void 0 : _getModelByType$prope[property_name];
    if (property) {
      var format = property.format;
      switch (format) {
        case "color":
          return "Colour";
      }
      var type = Array.isArray(property.type) ? property.type.find(function (t) {
        return t !== "null";
      }) : property.type;
      switch (type) {
        case "boolean":
          return "Boolean";
        case "number":
        case "integer":
          return "Number";
        case "string":
          return "String";
      }
    }
    return null;
  },
  /**
   * Update the PROPERTY field.
   */
  updatePropertyField_: function updatePropertyField_() {
    var _this2 = this;
    var property_field = this.getField("PROPERTY");
    if (!property_field) return;
    var options = property_field.getOptions(false);
    var match = options.find(function (o) {
      return o[1] === _this2.property_;
    });
    property_field.setValue(match ? this.property_ : options[0][1]);
  },
  /**
   * Update the output or VALUE field's check.
   */
  updateChecks_() {
    var mock = this.type.endsWith("_mock");
    if (mock) return;
    var component_type = this.getComponentType_();
    var property_value = this.getFieldValue("PROPERTY");
    var type = this.getPropertyValueTypeCheck_(component_type, property_value);
    var value_input = this.getInput("VALUE");
    if (value_input) {
      value_input.setCheck(type);
    } else if (this.outputConnection) {
      this.outputConnection.setCheck(type);
    }
  }
};
core_browser.Extensions.registerMutator("components_property_options_mutator", PROPERTY_OPTIONS_MUTATOR_MIXIN);
(0,core_browser.defineBlocksWithJsonArray)([
// Click.
{
  type: "components_click",
  message0: "%{BKY_COMPONENTS_CLICK}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }],
  message1: "%{BKY_COMPONENTS_CLICK_THEN}",
  args1: [{
    type: "input_statement",
    name: "STATEMENT"
  }],
  extensions: ["components_component_options"],
  inputsInline: true,
  style: "trigger_blocks",
  tooltip: "%{BKY_COMPONENTS_CLICK_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_CLICK_HELPURL}"
},
// Set scenario.
{
  type: "components_set_scenario",
  message0: "%{BKY_COMPONENTS_SET_SCENARIO}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }],
  extensions: ["components_scenario_options"],
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_COMPONENTS_SET_SCENARIO_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_SET_SCENARIO_HELPURL}"
},
// Get property.
{
  type: "components_get_property",
  message0: "%{BKY_COMPONENTS_GET_PROPERTY}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }, {
    type: "input_dummy",
    name: "PROPERTY"
  }],
  extensions: ["components_component_options", "components_property_options"],
  mutator: "components_property_options_mutator",
  inputsInline: true,
  output: null,
  style: "component_blocks",
  tooltip: "%{BKY_COMPONENTS_GET_PROPERTY_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_GET_PROPERTY_HELPURL}"
},
// Get property mock.
{
  type: "components_get_property_mock",
  message0: "%{BKY_COMPONENTS_GET_PROPERTY}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }, {
    type: "input_dummy",
    name: "PROPERTY"
  }],
  extensions: ["components_component_options", "components_property_options"],
  mutator: "components_property_options_mutator",
  inputsInline: true,
  output: null,
  style: "component_blocks",
  tooltip: "%{BKY_COMPONENTS_GET_PROPERTY_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_GET_PROPERTY_HELPURL}"
},
// Set property.
{
  type: "components_set_property",
  message0: "%{BKY_COMPONENTS_SET_PROPERTY}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }, {
    type: "input_dummy",
    name: "PROPERTY"
  }, {
    type: "input_value",
    name: "VALUE"
  }],
  extensions: ["components_component_options", "components_property_options"],
  mutator: "components_property_options_mutator",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_COMPONENTS_SET_PROPERTY_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_SET_PROPERTY_HELPURL}"
},
// Set property mock.
{
  type: "components_set_property_mock",
  message0: "%{BKY_COMPONENTS_SET_PROPERTY}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }, {
    type: "input_dummy",
    name: "PROPERTY"
  }, {
    type: "input_value",
    name: "VALUE"
  }],
  extensions: ["components_component_options", "components_property_options"],
  mutator: "components_property_options_mutator",
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_COMPONENTS_SET_PROPERTY_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_SET_PROPERTY_HELPURL}"
},
// Get block's activate page index.
{
  type: "components_get_block_page",
  message0: "%{BKY_COMPONENTS_GET_BLOCK_PAGE}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }],
  extensions: ["components_block_options"],
  output: "Number",
  style: "component_blocks",
  tooltip: "%{BKY_COMPONENTS_GET_BLOCK_PAGE_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_GET_BLOCK_PAGE_HELPURL}"
},
// Set block's activate page index.
{
  type: "components_set_block_page",
  message0: "%{BKY_COMPONENTS_SET_BLOCK_PAGE}",
  args0: [{
    type: "input_dummy",
    name: "COMPONENT"
  }, {
    type: "input_value",
    name: "INDEX",
    check: "Number"
  }],
  extensions: ["components_block_options"],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_COMPONENTS_SET_BLOCK_PAGE_TOOLTIP}",
  helpUrl: "%{BKY_COMPONENTS_SET_BLOCK_PAGE_HELPURL}"
}]);
core_browser.Css.register(`
  .blocklyDropDownDiv .blocklyMenuItemLabel {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "icon label"
      "breadcrumb breadcrumb";
    align-items: center;
    padding-left: calc(var(--level, 0) * 0.5em);
    gap: 0 0.5em;
  }
  .blocklyDropDownDiv .blocklyMenuItemLabelIcon {
    grid-area: icon;
    width: 1.5em;
  }
  .blocklyDropDownDiv .blocklyMenuItemLabelText {
    grid-area: label;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .blocklyDropDownDiv .blocklyMenuItemLabelBreadcrumb {
    display: none;
    grid-area: breadcrumb;
    font-size: 0.75em;
    opacity: 0.5;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .blocklyDropDownDiv .blocklySearchableMenuSearching .blocklyMenuItemLabel {
    padding-left: 0;
  }
  .blocklyDropDownDiv .blocklySearchableMenuSearching .blocklyMenuItemLabelBreadcrumb {
    display: block;
  }
  `);
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/blocks/keyboard.js

var keys = [["%{BKY_KEYBOARD_KEYPRESSED_ANY}", "any"], ["%{BKY_KEYBOARD_KEYPRESSED_SPACE}", " "], ["%{BKY_KEYBOARD_KEYPRESSED_UP}", "ArrowUp"], ["%{BKY_KEYBOARD_KEYPRESSED_DOWN}", "ArrowDown"], ["%{BKY_KEYBOARD_KEYPRESSED_RIGHT}", "ArrowRight"], ["%{BKY_KEYBOARD_KEYPRESSED_LEFT}", "ArrowLeft"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"], ["g", "g"], ["h", "h"], ["i", "i"], ["j", "j"], ["k", "k"], ["l", "l"], ["m", "m"], ["n", "n"], ["o", "o"], ["p", "p"], ["q", "q"], ["r", "r"], ["s", "s"], ["t", "t"], ["u", "u"], ["v", "v"], ["w", "w"], ["x", "x"], ["y", "y"], ["z", "z"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"]];
(0,core_browser.defineBlocksWithJsonArray)([{
  type: "keyboard_keypressed",
  message0: "%{BKY_KEYBOARD_KEYPRESSED}",
  args0: [{
    type: "field_dropdown",
    name: "KEY",
    options: keys
  }],
  message1: "%{BKY_KEYBOARD_KEYPRESSED_THEN}",
  args1: [{
    type: "input_statement",
    name: "STATEMENT"
  }],
  style: "trigger_blocks",
  tooltip: "%{BKY_KEYBOARD_KEYPRESSED_TOOLTIP}",
  helpUrl: "%{BKY_KEYBOARD_KEYPRESSED_HELPURL}"
}]);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(752);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(19649);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(76265);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(43843);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(65137);
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/blocks/links.js














var triggerOptions = (0,reactivity_esm_bundler/* ref */.iH)([]);
(0,runtime_core_esm_bundler/* watchEffect */.m0)(function () {
  var _useModule = (0,module_manager/* useModule */.b7)("app_components"),
    getComponentsByType = _useModule.getComponentsByType;
  var components = getComponentsByType("Content");
  var parser = new DOMParser();
  var ids = new Set();
  components.forEach(function (component) {
    var text = component.text;
    if (text && text.includes("data-behavior-trigger")) {
      var doc = parser.parseFromString(text, "text/html");
      doc.querySelectorAll("a[data-behavior-trigger]").forEach(function (el) {
        var id = el.dataset.behaviorTrigger;
        ids.add(id);
      });
    }
  });
  if (ids.size === 0) {
    triggerOptions.value = [[core_browser.Msg.LINKS_EMPTY_OPTION, constants/* EMPTY_OPTION */.X]];
  } else {
    triggerOptions.value = Array.from(ids).sort().map(function (id) {
      return [id, id];
    });
  }
});
core_browser.Extensions.register("behavior_triggers_options", function () {
  var block = this;
  var field = block.getField("TRIGGER");
  var options = field.getOptions();
  if (options.length === 1 && options[0][1] === constants/* EMPTY_OPTION */.X) {
    field.setEnabled(false);
    block.setEnabled(false);
    block.setTooltip(core_browser.Msg.LINKS_CLICK_EMPTY_TOOLTIP);
  } else {
    field.setEnabled(true);
    block.setEnabled(true);
    block.setTooltip(core_browser.Msg.LINKS_CLICK_TOOLTIP);
  }

  // Update the field's dropdown list and value when new options are available.
  watchDrowpdownFieldOptions(field, triggerOptions);
});
(0,core_browser.defineBlocksWithJsonArray)([{
  type: "links_click",
  message0: "%{BKY_LINKS_CLICK}",
  args0: [{
    type: "field_dropdown",
    name: "TRIGGER",
    options: function options() {
      return triggerOptions.value;
    }
  }],
  message1: "%{BKY_LINKS_CLICK_THEN}",
  args1: [{
    type: "input_statement",
    name: "STATEMENT"
  }],
  extensions: ["behavior_triggers_options"],
  style: "trigger_blocks",
  tooltip: "%{BKY_LINKS_CLICK_TOOLTIP}",
  helpUrl: "%{BKY_LINKS_CLICK_HELPURL}"
}, {
  type: "links_open_url",
  message0: "%{BKY_LINKS_OPEN_URL}",
  args0: [{
    type: "input_value",
    name: "URL",
    check: "String"
  }],
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  helpUrl: "%{BKY_LINKS_OPEN_URL_HELPURL}"
}]);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(48324);
;// CONCATENATED MODULE: ./node_modules/@blockly/block-plus-minus/src/serialization_helper.js

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * Returns the extra state of the given block (either as XML or a JSO, depending
 * on the block's definition).
 * @param {!Blockly.BlockSvg} block The block to get the extra state of.
 * @returns {string} A stringified version of the extra state of the given
 *     block.
 */
function getExtraBlockState(block) {
  // TODO: This is a dupe of the BlockChange.getExtraBlockState code, do we
  //    want to make that public?
  if (block.saveExtraState) {
    var state = block.saveExtraState();
    return state ? JSON.stringify(state) : '';
  } else if (block.mutationToDom) {
    var _state = block.mutationToDom();
    return _state ? core_browser.Xml.domToText(_state) : '';
  }
  return '';
}
;// CONCATENATED MODULE: ./node_modules/@blockly/block-plus-minus/src/field_minus.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview A function that creates a minus button used for mutation.
 */





/**
 * Creates a minus image field used for mutation.
 * @param {Object=} args Untyped args passed to block.minus when the field
 *     is clicked.
 * @returns {Blockly.FieldImage} The minus field.
 */
function createMinusField() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var minus = new core_browser.FieldImage(minusImage, 15, 15, undefined, onClick_);
  /**
   * Untyped args passed to block.minus when the field is clicked.
   * @type {?(Object|undefined)}
   * @private
   */
  minus.args_ = args;
  return minus;
}

/**
 * Calls block.minus(args) when the minus field is clicked.
 * @param {Blockly.FieldImage} minusField The field being clicked.
 * @private
 */
function onClick_(minusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  var block = minusField.getSourceBlock();
  if (block.isInFlyout) {
    return;
  }
  core_browser.Events.setGroup(true);
  var oldExtraState = getExtraBlockState(block);
  block.minus(minusField.args_);
  var newExtraState = getExtraBlockState(block);
  if (oldExtraState != newExtraState) {
    core_browser.Events.fire(new core_browser.Events.BlockChange(block, 'mutation', null, oldExtraState, newExtraState));
  }
  core_browser.Events.setGroup(false);
}
var minusImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw' + 'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS' + 'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw' + 'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';
;// CONCATENATED MODULE: ./node_modules/@blockly/block-plus-minus/src/field_plus.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview A field for a plus button used for mutation.
 */





/**
 * Creates a plus image field used for mutation.
 * @param {Object=} args Untyped args passed to block.minus when the field
 *     is clicked.
 * @returns {Blockly.FieldImage} The Plus field.
 */
function createPlusField() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var plus = new core_browser.FieldImage(plusImage, 15, 15, undefined, field_plus_onClick_);
  /**
   * Untyped args passed to block.plus when the field is clicked.
   * @type {?(Object|undefined)}
   * @private
   */
  plus.args_ = args;
  return plus;
}

/**
 * Calls block.plus(args) when the plus field is clicked.
 * @param {!Blockly.FieldImage} plusField The field being clicked.
 * @private
 */
function field_plus_onClick_(plusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  var block = plusField.getSourceBlock();
  if (block.isInFlyout) {
    return;
  }
  core_browser.Events.setGroup(true);
  var oldExtraState = getExtraBlockState(block);
  block.plus(plusField.args_);
  var newExtraState = getExtraBlockState(block);
  if (oldExtraState != newExtraState) {
    core_browser.Events.fire(new core_browser.Events.BlockChange(block, 'mutation', null, oldExtraState, newExtraState));
  }
  core_browser.Events.setGroup(false);
}
var plusImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' + '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' + 'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' + 'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' + 'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' + '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/blocks/media.js






(0,core_browser.defineBlocksWithJsonArray)([
// Block for timecode value
{
  type: "media_timecode",
  message0: "%1",
  args0: [{
    type: "field_timecode",
    name: "TIMECODE"
  }],
  output: "Number",
  style: "media_blocks",
  helpUrl: "%{BKY_MEDIA_TIMECODE_HELPURL}",
  tooltip: "%{BKY_MEDIA_TIMECODE_TOOLTIP}",
  extensions: ["parent_tooltip_when_inline"]
}, {
  type: "media_get_duration",
  message0: "%{BKY_MEDIA_GET_DURATION}",
  output: "Number",
  style: "media_blocks",
  tooltip: "%{BKY_MEDIA_GET_DURATION_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_GET_DURATION_HELPURL}"
}, {
  type: "media_get_time",
  message0: "%{BKY_MEDIA_GET_TIME}",
  output: "Number",
  style: "media_blocks",
  tooltip: "%{BKY_MEDIA_GET_TIME_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_GET_TIME_HELPURL}"
}, {
  type: "media_set_time",
  message0: "%{BKY_MEDIA_SET_TIME}",
  args0: [{
    type: "input_value",
    name: "VALUE",
    check: "Number"
  }],
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_MEDIA_SET_TIME_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_SET_TIME_HELPURL}"
}, {
  type: "media_playing",
  message0: "%{BKY_MEDIA_PLAYING}",
  output: "Boolean",
  style: "media_blocks",
  tooltip: "%{BKY_MEDIA_PLAYING_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_PLAYING_HELPURL}"
}, {
  type: "media_play",
  message0: "%{BKY_MEDIA_PLAY}",
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_MEDIA_PLAY_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_PLAY_HELPURL}"
}, {
  type: "media_play_excerpt",
  message0: "%{BKY_MEDIA_PLAY_EXCERPT}",
  args0: [{
    type: "input_dummy",
    name: "PLUS_MINUS"
  }, {
    type: "input_value",
    name: "FROM",
    check: "Number"
  }, {
    type: "input_value",
    name: "TO",
    check: "Number"
  }, {
    type: "input_dummy",
    name: "LINK_HIGHLIGHT"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  mutator: "media_play_excerpt_mutator",
  tooltip: "%{BKY_MEDIA_PLAY_EXCERPT_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_PLAY_EXCERPT_HELPURL}"
},
// Block representing the top block in the media_play_excerpt mutator.
{
  type: "media_play_excerpt_top",
  message0: "%{BKY_MEDIA_PLAY_EXCERPT}",
  args0: [{
    type: "input_value",
    name: "FROM",
    check: "Number"
  }, {
    type: "input_value",
    name: "TO",
    check: "Number"
  }],
  inputsInline: true,
  nextStatement: null,
  enableContextMenu: false,
  style: "actions_blocks",
  tooltip: "%{BKY_MEDIA_PLAY_EXCERPT_TOP_TOOLTIP}"
},
// Block representing the then statement in the media_play_excerpt mutator.
{
  type: "media_play_excerpt_then",
  message0: "%{BKY_MEDIA_PLAY_EXCERPT_THEN}",
  previousStatement: null,
  enableContextMenu: false,
  style: "actions_blocks",
  tooltip: "%{BKY_MEDIA_PLAY_EXCERPT_THEN_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_PLAY_EXCERPT_THEN_HELPURL}"
}, {
  type: "media_pause",
  message0: "%{BKY_MEDIA_PAUSE}",
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_MEDIA_PAUSE_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_PAUSE_HELPURL}"
}, {
  type: "media_stop",
  message0: "%{BKY_MEDIA_STOP}",
  previousStatement: null,
  nextStatement: null,
  style: "actions_blocks",
  tooltip: "%{BKY_MEDIA_STOP_TOOLTIP}",
  helpUrl: "%{BKY_MEDIA_STOP_HELPURL}"
}]);

/**
 * Mutator methods added to media_play_excerpt block.
 * @mixin
 * @augments Block
 * @readonly
 */
var MEDIA_PLAY_EXCERPT_MUTATOR_MIXIN = {
  hasThen_: false,
  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {?{hasThen: (boolean|undefined)}}
   *     The state of this block.
   */
  saveExtraState: function saveExtraState() {
    if (!this.hasLinkHighlight_ && !this.hasThen_) {
      return null;
    }
    var data = {};
    if (this.hasLinkHighlight_) {
      data.hasLinkHighlight = true;
    }
    if (this.hasThen_) {
      data.hasThen = true;
    }
    return data;
  },
  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block.
   */
  loadExtraState: function loadExtraState(state) {
    this.hasLinkHighlight_ = state["hasLinkHighlight"] || false;
    this.hasThen_ = state["hasThen"] || false;
    this.updateShape_();
  },
  /**
   * Callback for the plus field.
   */
  plus: function plus() {
    this.hasThen_ = true;
    this.updateShape_();
  },
  /**
   * Callback for the minus field.
   * @this {Blockly.Block}
   */
  minus: function minus() {
    this.hasThen_ = false;
    this.updateShape_();
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this {Block}
   * @private
   */
  updateShape_: function updateShape_() {
    var input = this.getInput("LINK_HIGHLIGHT");
    if (this.hasLinkHighlight_) {
      if (!this.getField("HIGHLIGHT_LINK")) {
        var checkbox = new core_browser.FieldCheckbox();
        checkbox.setTooltip(core_browser.Msg["MEDIA_PLAY_EXCERPT_HIGHLIGHT_LINK_TOOLTIP"]);
        var label = new core_browser.FieldLabel(core_browser.Msg["MEDIA_PLAY_EXCERPT_HIGHLIGHT_LINK"]);
        label.setTooltip(core_browser.Msg["MEDIA_PLAY_EXCERPT_HIGHLIGHT_LINK_TOOLTIP"]);
        input.appendField(checkbox, "HIGHLIGHT_LINK").appendField(label, "HIGHLIGHT_LINK_LABEL");
      }
    } else {
      input.fieldRow.map(function (field) {
        return field.name;
      }).forEach(function (name) {
        input.removeField(name);
      });
    }
    if (this.hasThen_) {
      // Update plus/minus buttons.
      if (this.getField("PLUS")) {
        this.getInput("PLUS_MINUS").removeField("PLUS");
      }
      if (!this.getField("MINUS")) {
        this.getInput("PLUS_MINUS").appendField(createMinusField(), "MINUS");
      }
      // Add "then" input.
      if (!this.getInput("THEN")) {
        this.appendStatementInput("THEN").appendField(core_browser.Msg["MEDIA_PLAY_EXCERPT_THEN"]);
      }
    } else {
      // Update plus/minus buttons.
      if (!this.getField("PLUS")) {
        this.getInput("PLUS_MINUS").appendField(createPlusField(), "PLUS");
      }
      if (this.getField("MINUS")) {
        this.getInput("PLUS_MINUS").removeField("MINUS");
      }
      // Remove "then" input.
      if (this.getInput("THEN")) {
        this.removeInput("THEN");
      }
    }
  }
};

/**
 * Adds the initial plus button.
 * @this {Blockly.Block}
 */
var MEDIA_PLAY_EXCERPT_MUTATOR_HELPER = function MEDIA_PLAY_EXCERPT_MUTATOR_HELPER() {
  this.setOnChange(function (evt) {
    if (evt.isUiEvent) return;
    var parent_block = this.getSurroundParent();
    var hasLinkHighlight = parent_block && parent_block.type === "links_click";
    if (this.hasLinkHighlight_ !== hasLinkHighlight) {
      this.hasLinkHighlight_ = !!hasLinkHighlight;
      this.updateShape_();
    }
  });
  this.updateShape_();
};
core_browser.Extensions.registerMutator("media_play_excerpt_mutator", MEDIA_PLAY_EXCERPT_MUTATOR_MIXIN, MEDIA_PLAY_EXCERPT_MUTATOR_HELPER, ["media_play_excerpt_then"]);
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/blocks/reactivity.js

(0,core_browser.defineBlocksWithJsonArray)([{
  type: "reactivity_when",
  message0: "%{BKY_REACTIVITY_WHEN}",
  args0: [{
    type: "input_value",
    name: "CONDITION",
    check: "Boolean"
  }],
  message1: "%{BKY_REACTIVITY_WHEN_THEN}",
  args1: [{
    type: "input_statement",
    name: "STATEMENT"
  }],
  inputsInline: true,
  style: "trigger_blocks",
  tooltip: "%{BKY_REACTIVITY_WHEN_TOOLTIP}",
  helpUrl: "%{BKY_REACTIVITY_WHEN_HELPURL}"
}]);
;// CONCATENATED MODULE: ./packages/core/modules/app_behaviors/blockly/blocks/index.js







/***/ })

}]);
//# sourceMappingURL=metaScore.Player.umd.773.js.map