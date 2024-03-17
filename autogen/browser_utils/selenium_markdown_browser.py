import os
import io
from typing import Optional, Union, Dict
from urllib.parse import urljoin, urlparse, quote_plus, unquote, parse_qs
from .requests_markdown_browser import RequestsMarkdownBrowser

# Check if Playwright dependencies are installed
IS_SELENIUM_ENABLED = False
try:
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.common.by import By

    IS_SELENIUM_ENABLED = True
except ModuleNotFoundError:
    pass

class SeleniumMarkdownBrowser(RequestsMarkdownBrowser):
    """
    (In preview) A Selenium and Chromium powered Markdown web browser.
    See AbstractMarkdownBrowser for more details.
    """

    def __init__(
        self,
        **kwargs
    ):
        super().__init__(**kwargs)
        self._webdriver = None

        # Raise an error if Playwright isn't available
        if not IS_SELENIUM_ENABLED:
            raise ModuleNotFoundError(
                "No module named 'selenium'. Selenium can be installed via 'pip install selenium' or 'conda install selenium' depending on your environment."
            )

        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--no-sandbox")
        self._webdriver = webdriver.Chrome(options=chrome_options)
        self._webdriver.implicitly_wait(99)
        self._webdriver.get(self.start_page)

    def __del__(self):
        self.close()

    def close(self):
        if self._webdriver is not None:
            pass

    def _fetch_page(self, url) -> None:
        if url.startswith("file://"):
            super()._fetch_page(url)
        else:
            self._webdriver.get(url)
            html = self._webdriver.execute_script("return document.documentElement.outerHTML;")

            if not html: # Nothing... it's probably a download
                super()._fetch_page(url)
            else:
                self.page_title = self._webdriver.execute_script("return document.title;")
                res = self._markdown_converter.convert_stream(io.StringIO(html), file_extension=".html", url=url)
                self._set_page_content(res.text_content)