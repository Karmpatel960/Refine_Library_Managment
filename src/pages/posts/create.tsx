import React from "react";
import { IResourceComponentsProps, file2Base64,
    HttpError, } from "@pankod/refine-core";

import {
    Create,
    Form,
    Input,
    Select,
    Upload,
    useForm,
    useSelect,
    getValueFromEvent,
} from "@pankod/refine-antd";

import MDEditor from "@uiw/react-md-editor";

import { IPost, ICategory, IUser, IUserVariable } from "interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<
    IPost
  
    >();

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
    });

    return (
        <Create saveButtonProps={saveButtonProps} title="Add Book"         wrapperProps={{
            style: {
                backgroundColor: "cornflowerblue",
                padding: "16px",
            },
        }}>
            <Form {...formProps} layout="vertical"  
             onFinish={async (values) => {
                 const base64Files = [];
                //  const { avatar} = values;

                 for (const file of avatar) {
                     if (file.originFileObj) {
                         const base64String = await file2Base64(file);

                         base64Files.push({
                             ...file,
                             base64String,
                         });
                     } else {
                         base64Files.push(file);
                     }
                 }

                 return (
                     formProps.onFinish &&
                     formProps.onFinish({
                         ...values,
                         avatar: base64Files,
                     })
                 );
             }}>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>

                <Form.Item label="Book Cover Page ">
                    <Form.Item
                        name="Book Cover Page"
                        valuePropName="fileList"
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger
                            listType="picture"
                            multiple
                            beforeUpload={() => false}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        options={[
                            {
                                label: "Published",
                                value: "published",
                            },
                            {
                                label: "Draft",
                                value: "draft",
                            },
                            {
                                label: "Rejected",
                                value: "rejected",
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <MDEditor data-color-mode="dark" />
                </Form.Item>
            </Form>
        </Create>
    );
};