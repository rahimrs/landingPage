import React from 'react';
import {
    Form,
    Input,
    Select,
    Checkbox,
    AutoComplete,
} from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class ContactForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
        },
        };
        const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
        })(
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>,
        );
  
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
    
        return (
            <Form  onSubmit={this.handleSubmit}>

                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>

                <Form.Item label="Website">
                    {getFieldDecorator('Optional', {
                    rules: [{ required: false, message: 'Please input website!' }],
                    })(
                    <AutoComplete
                        dataSource={websiteOptions}
                        onChange={this.handleWebsiteChange}
                        placeholder="website"
                    >
                        <Input />
                    </AutoComplete>,
                    )}
                </Form.Item>

                <Form.Item label="Message">
                    {getFieldDecorator('Your Message here ... ', {
                    rules: [{ required: true, message: 'Say something ... ' }],
                    })(
                    <TextArea rows={4} />
                    )}
                </Form.Item>
            
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                    })(
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>,
                    )}
                </Form.Item>
                
            </Form>
        )
    };
};
  
export const WrappedContactForm = Form.create({ name: 'register' })(ContactForm);