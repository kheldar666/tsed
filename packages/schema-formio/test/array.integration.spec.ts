import {CollectionOf} from "@tsed/schema";
import {getFormioSchema} from "@tsed/schema-formio";
import {expect} from "chai";

describe("Array", () => {
  it("should declare array string", () => {
    class Model {
      @CollectionOf(String)
      test: string[];
    }

    expect(getFormioSchema(Model)).to.deep.eq({
      components: [
        {
          disabled: false,
          input: true,
          key: "test",
          label:'Test',
          multiple: true,
          type: "textfield",
          validate: {
            required: false
          }
        }
      ],
      display: "form",
      machineName: "model",
      name: "model",
      title: "Model",
      type: "form"
    });
  });
  it("should declare array number", () => {
    class Model {
      @CollectionOf(Number)
      test: number[];
    }

    expect(getFormioSchema(Model)).to.deep.eq({
      "components": [
        {
          "delimiter": false,
          "disabled": false,
          "input": true,
          "inputFormat": "plain",
          label:'Test',
          "key": "test",
          "mask": false,
          "multiple": true,
          "requireDecimal": false,
          "type": "number",
          "validate": {
            "required": false
          }
        }
      ],
      "display": "form",
      "machineName": "model",
      "name": "model",
      "title": "Model",
      "type": "form"
    });
  });
  it("should declare array boolean", () => {
    class Model {
      @CollectionOf(Boolean)
      test: boolean[];
    }

    expect(getFormioSchema(Model)).to.deep.eq({
      "components": [
        {
          "disabled": false,
          "input": true,
          "key": "test",
          "multiple": true,
          "type": "checkbox",
          label:'Test',
          "validate": {
            "required": false
          }
        }
      ],
      "display": "form",
      "machineName": "model",
      "name": "model",
      "title": "Model",
      "type": "form"
    });
  });
});
