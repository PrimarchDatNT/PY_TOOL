def get_log_data():
    data = []
    with open('styleable.log') as logfile:
        logdatas = logfile.readlines()
    logfile.close()

    for line in logdatas:
        if line.__contains__(':[I'):
            styleable_name = line[line.index('>'):].replace('>', '').replace(':[I', '_').strip()
            if not data.__contains__(styleable_name):
                data.append(styleable_name)

    return data


if __name__ == '__main__':

    tree = {}
    with open('sty') as datafile:
        lines = datafile.readlines()
        datafile.close()

    tmp_name = ''
    for line in lines:
        if line.__contains__('[]'):
            styleable_name = line[:line.index('=')].replace('public static final int[]', '').strip()
            tmp_name = styleable_name
            tree[styleable_name] = []
        if line.__contains__('=') and line.__contains__(tmp_name) and not line.__contains__('[]'):
            tree[tmp_name].append(line.strip())

    for key in tree:
        zeroline = 'public static final int[] ' + key + ' = {'
        for line in tree[key]:
            mark = key + '_'
            attr_name = str(line)[:line.index('=')] \
                .replace('public static final int', '') \
                .replace(mark, '').strip()
            zeroline += 'R.attr.' + attr_name + ','

        zeroline += '}'
        zeroline = zeroline.replace(',}', '};')
        tree[key].append(zeroline)

    for key in tree:
        for line in tree[key]:
            print(line)
