const source = 'This is an @mention.';

const result = source.replace(/(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/g, ` <a href="//twitter.com/$1">@$1</a>`);

document.write(result);