FROM python:3.9-bullseye

RUN groupadd -r backend
RUN useradd -g backend -m backend

RUN chown -R backend:backend /home/backend

COPY . ./home/backend

WORKDIR /home/backend/web-app

#RUN chmod 777 ./db.sqlite3

ENV DJANGO_SUPERUSER_PASSWORD=bezim

RUN pip3 install -r requirements.txt
RUN python3 manage.py makemigrations && python3 manage.py migrate
RUN python3 manage.py createsuperuser --username bezim --email bezim@bezim.zim --no-input

EXPOSE 8000

#USER backend

ENTRYPOINT ["python3"]
CMD ["manage.py", "runserver", "0.0.0.0:8000"]