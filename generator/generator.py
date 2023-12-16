import random
import difflib


def extract_words(words, num):
    return random.sample(words, num)


def format_words(words, case):
    if case == "kebab-case":
        return "-".join(words)
    elif case == "camelCase":
        return "".join([w.capitalize() if i else w for i, w in enumerate(words)])
    else:
        return " ".join(words)


def generate_options(words_list, words, format):
    options = []
    for i in range(3):
        options.append([])
    for word in words:
        # sort words_list by how similar they are to word and take the top 15
        wl = sorted(words_list, key=lambda w: difflib.SequenceMatcher(None, w, word).ratio(), reverse=True)[1:15]
        random.shuffle(wl)
        for i in range(3):
            options[i].append(wl[i])

    return [format_words(option, format) for option in options]


OPTIONS_FORMAT = ["kebab-case", "camelCase", "space"]


def main(words_per_question, question_per_format):
    questions = []
    with open("./words.txt", "r") as f:
        words_list = f.read().splitlines()

        for i in range(int(question_per_format)):
            words = extract_words(words_list, words_per_question)
            for format in OPTIONS_FORMAT:
                question_obj = {"question": format_words(words, "space"), "options": [], "format": format,
                                "answer": format_words(words, format)}

                options = generate_options(words_list, words, format)
                options.append(question_obj["answer"])
                random.shuffle(options)

                question_obj["options"] = options

                questions.append(question_obj)

    with open("./questions.json", "w") as f:
        import json
        json.dump(questions, f, indent=4)


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 3:
        words_per_question = 2
        question_per_format = 10
    else:
        words_per_question, question_per_format = map(int, sys.argv[1:3])

    main(words_per_question, question_per_format)
