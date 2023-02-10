import { useShow, IResourceComponentsProps, useOne } from "@pankod/refine-core";

import { Show, Typography, MarkdownField ,ImageField} from "@pankod/refine-antd";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<IPost>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData, isLoading: categoryIsLoading } =
        useOne<ICategory>({
            resource: "categories",
            id: record?.category.id || "",
            queryOptions: {
                enabled: !!record,
            },
        });

    return (
        <Show isLoading={isLoading} title="Book">
            <Title level={5}>Id</Title>
            <Text>{record?.id}</Text>

            <Title level={5}>Image</Title>
                        <ImageField
                            value={record?.image[0].url}
                            title={record?.image[0].name}
                            width={100}
                            height={100}
                        />

            <Title level={5}>Title</Title>
            <Text>{record?.title}</Text>

            <Title level={5}>Category</Title>
            <Text>
                {categoryIsLoading ? "Loading..." : categoryData?.data.title}
            </Text>

            <Title level={5}>Content</Title>
            <MarkdownField value={record?.content} />
        </Show>
    );
};