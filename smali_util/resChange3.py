def getstyledata():
    style_data = {}
    file_content = open('RStyable.java', 'r').readlines()
    for line in file_content:
        if line.__contains__('public static final int '):
            content_prop = line[line.index('int '):].replace('int ', '').replace('\n', '')
            content_prop_parrent = content_prop[:content_prop.index('_')]
            content_prop_name = content_prop[:content_prop.index('= ')].strip()
            content_prop_value = int(content_prop[content_prop.index('= '):].replace('= ', '').replace(';', ''))
            # print(content_prop)
            # print(content_prop_name)
            # print(content_prop_value)
            # print(content_prop_parrent)
            if not style_data.__contains__(content_prop_parrent):
                style_data[content_prop_parrent] = []
            style_data[content_prop_parrent].append(content_prop_name)
    print(style_data)
    return style_data


def getstyle_arraydata():
    style_data = {}
    file_content = open('RStyable.java', 'r').readlines()
    for line in file_content:
        if line.__contains__('public static final int[]') and line.__contains__('{'):
            array_prop = line[line.index('int[] '):].replace('int[] ', '').replace('\n', '')
            array_name = array_prop[:array_prop.index('=')].strip()
            array_value = array_prop[array_prop.index('{'):].replace('{', '').replace('};', '').split(',')
            # print(array_prop)
            # print(array_name)
            # print(array_value)
            style_data[array_name] = array_value
    print(style_data)
    return style_data


if __name__ == '__main__':
    getstyledata()
    getstyle_arraydata()
