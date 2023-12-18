import random
import difflib


def extract_words(words, num):
    """
    Words are extracted from the end of the list, which is shuffled before each extraction.
    This way, the extraction is random and the words are not repeated.
    """
    extracted_words = []
    for _ in range(num):
        extracted_words.append(words.pop())
    return extracted_words


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


def generate_right_answers_position(num_questions: int):
    positions = []
    quarter = num_questions // 4
    for i in range(4):
        for _ in range(quarter):
            positions.append(i)

    remaining = num_questions - len(positions)
    for _ in range(remaining):
        positions.append(random.randint(0, 3))

    random.shuffle(positions)
    return positions


def generate_questions(words_list, words_per_question: int, num: int, answers_same_order=True,
                       all_formats=True):
    questions = []
    if not all_formats:
        num *= 3
    right_answers_position = generate_right_answers_position(num)
    for i in range(num):
        words = extract_words(words_list, words_per_question)

        # make sure that
        right_answer_position = right_answers_position[i]
        for j, format in enumerate(OPTIONS_FORMAT):
            if not all_formats:
                j = 0
                format = random.choice(OPTIONS_FORMAT)
            question_obj = {"id": f"{i}-{j}", "question": format_words(words, "space"), "options": [], "format": format,
                            "answer": format_words(words, format)}

            options = generate_options(words_list, words, format)
            if not answers_same_order:
                options.append(question_obj["answer"])
            random.shuffle(options)

            if answers_same_order:
                options.insert(right_answer_position, question_obj["answer"])

            question_obj["options"] = options
            questions.append(question_obj)

            if not all_formats:
                break

    random.shuffle(questions)

    if num == 1:
        return questions

    # avoid having the same question twice in a row
    for i in range(1, len(questions)):
        j = i - 1
        while questions[i]["question"] == questions[j]["question"]:
            random.shuffle(questions)
            j = i - 1
    return questions


OPTIONS_FORMAT = ["kebab-case", "camelCase", "space"]


def main(demo=False, words_per_question=2, unique_questions=10, warmup_questions=1):
    experiment = {"warmup": [], "questions": []}
    with open("./words.txt", "r") as f:
        words_list = f.read().splitlines()
        words_list = [word for word in words_list if len(word) <= 8 and len(word) >= 4]
        random.shuffle(words_list)
        print(len(words_list))

        experiment["warmup"] = generate_questions(words_list, words_per_question, warmup_questions, False, False)
        experiment["questions"] = generate_questions(words_list, words_per_question, unique_questions)

    file_name = "demo" if demo else "questions"
    with open(f"./{file_name}.json", "w") as f:
        import json
        json.dump(experiment, f, indent=4)


if __name__ == "__main__":
    import sys

    if "--demo" in sys.argv:
        print("Creating demo file")
        random.seed("demo")
        main(demo=True, unique_questions=5)
    else:
        random.seed("experiment2")
        main()
