import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="django-data-browser",
    version="0.0.1",
    author="Gordon Wrigley",
    author_email="gordon.wrigley@gmail.com",
    description="git@github.com:tolomea/django-data-browser.git",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/tolomea/django-data-browser",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.5",
)
